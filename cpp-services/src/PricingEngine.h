#ifndef PRICING_ENGINE_H
#define PRICING_ENGINE_H

#include <string>

class PricingEngine {
public:
    double calculateDynamicPrice(const std::string& service_id, double distance_km, int demand_multiplier);
};

#endif // PRICING_ENGINE_H
