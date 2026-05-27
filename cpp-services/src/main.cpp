#include <iostream>
#include <memory>
#include <string>
#include <grpcpp/grpcpp.h>
#include "roko.grpc.pb.h"
#include "MatchingEngine.h"
#include "PricingEngine.h"

using grpc::Server;
using grpc::ServerBuilder;
using grpc::ServerContext;
using grpc::Status;

using roko::AdvancedServices;
using roko::MatchingRequest;
using roko::MatchingResponse;
using roko::ScheduleRequest;
using roko::ScheduleResponse;
using roko::PricingRequest;
using roko::PricingResponse;

class AdvancedServicesImpl final : public AdvancedServices::Service {
private:
    MatchingEngine matching_engine_;
    PricingEngine pricing_engine_;

public:
    Status FindBestWorkers(ServerContext* context, const MatchingRequest* request, MatchingResponse* reply) override {
        auto workers = matching_engine_.findBestWorkers(request->service_id(), request->client_lat(), request->client_lng(), request->max_results());
        for (const auto& w : workers) {
            reply->add_worker_ids(w);
        }
        return Status::OK;
    }

    Status OptimizeSchedule(ServerContext* context, const ScheduleRequest* request, ScheduleResponse* reply) override {
        auto slots = matching_engine_.optimizeSchedule(request->worker_id(), request->date());
        for (const auto& s : slots) {
            reply->add_available_slots(s);
        }
        return Status::OK;
    }

    Status CalculateDynamicPrice(ServerContext* context, const PricingRequest* request, PricingResponse* reply) override {
        double price = pricing_engine_.calculateDynamicPrice(request->service_id(), request->distance_km(), request->demand_multiplier());
        reply->set_final_price(price);
        return Status::OK;
    }
};

void RunServer() {
    std::string server_address("0.0.0.0:50051");
    AdvancedServicesImpl service;

    ServerBuilder builder;
    builder.AddListeningPort(server_address, grpc::InsecureServerCredentials());
    builder.RegisterService(&service);
    
    std::unique_ptr<Server> server(builder.BuildAndStart());
    std::cout << "ROKO C++ Advanced Services listening on " << server_address << std::endl;
    server->Wait();
}

int main(int argc, char** argv) {
    RunServer();
    return 0;
}
