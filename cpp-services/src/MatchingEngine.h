#ifndef MATCHING_ENGINE_H
#define MATCHING_ENGINE_H

#include <string>
#include <vector>

class MatchingEngine {
public:
    std::vector<std::string> findBestWorkers(const std::string& service_id, double client_lat, double client_lng, int max_results);
    std::vector<std::string> optimizeSchedule(const std::string& worker_id, const std::string& date);
};

#endif // MATCHING_ENGINE_H
