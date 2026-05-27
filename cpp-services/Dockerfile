FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    git \
    protobuf-compiler \
    libprotobuf-dev \
    libgrpc++-dev \
    protobuf-compiler-grpc

WORKDIR /app
COPY cpp-services/ ./cpp-services/

WORKDIR /app/cpp-services
RUN mkdir build && cd build && cmake .. && make

EXPOSE 50051
CMD ["./build/roko_cpp_service"]
