cmake_minimum_required(VERSION 3.15)
project(roko_cpp_services)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Find Protobuf and gRPC
find_package(Protobuf REQUIRED)
find_package(gRPC CONFIG REQUIRED)

# Generate proto files
set(PROTO_FILE "${CMAKE_CURRENT_SOURCE_DIR}/protos/roko.proto")
set(PROTO_SRC_DIR "${CMAKE_CURRENT_BINARY_DIR}")

add_custom_command(
    OUTPUT "${PROTO_SRC_DIR}/roko.pb.cc"
           "${PROTO_SRC_DIR}/roko.pb.h"
           "${PROTO_SRC_DIR}/roko.grpc.pb.cc"
           "${PROTO_SRC_DIR}/roko.grpc.pb.h"
    COMMAND protoc
    ARGS --grpc_out="${PROTO_SRC_DIR}"
         --cpp_out="${PROTO_SRC_DIR}"
         -I "${CMAKE_CURRENT_SOURCE_DIR}/protos"
         --plugin=protoc-gen-grpc=$<TARGET_FILE:gRPC::grpc_cpp_plugin>
         "${PROTO_FILE}"
    DEPENDS "${PROTO_FILE}"
)

add_executable(roko_cpp_service
    src/main.cpp
    src/MatchingEngine.cpp
    src/PricingEngine.cpp
    ${PROTO_SRC_DIR}/roko.pb.cc
    ${PROTO_SRC_DIR}/roko.grpc.pb.cc
)

target_include_directories(roko_cpp_service PUBLIC ${PROTO_SRC_DIR} src)
target_link_libraries(roko_cpp_service gRPC::grpc++ protobuf::libprotobuf)
