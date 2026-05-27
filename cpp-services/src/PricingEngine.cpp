#include "PricingEngine.h"
#include <iostream>
#include <cmath>

double PricingEngine::calculateDynamicPrice(const std::string& service_id, double distance_km, int demand_multiplier) {
    std::cout << "[PricingEngine] Calculating price for service: " << service_id << std::endl;
    // Mock dynamic pricing algorithm based on distance and demand
    double base_price = 50.0;
    double travel_fee = distance_km * 1.5;
    double demand_factor = 1.0 + (demand_multiplier * 0.1); 
    
    return std::round((base_price + travel_fee) * demand_factor * 100.0) / 100.0;
}
