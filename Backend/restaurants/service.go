package restaurants

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"project/model"
)

func GetRestaurants(w http.ResponseWriter, r *http.Request) {
	// var userIdInt int
	// var currentTab string

	// userIdStr := r.URL.Query().Get("userId")
	// if len(userIdStr) == 0 {
	// 	http.Error(w, "User Id cannot be empty", http.StatusBadRequest)
	// 	return
	// }
	// userIdInt, err := strconv.Atoi(userIdStr)
	// if err != nil {
	// 	http.Error(w, err.Error(), http.StatusBadRequest)
	// 	return
	// }
	// if userIdInt == 0 {
	// 	http.Error(w, "User Id cannot be 0", http.StatusBadRequest)
	// 	return
	// }

	// currentTab = r.URL.Query().Get("currentTab")

	req := model.GetRestaurantsRequest{}

	resp := getProductsForTab(req, w)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func getProductsForTab(req model.GetRestaurantsRequest, w http.ResponseWriter) model.GetRestaurantsResponse {
	apiEndpoint := "https://data.cityofnewyork.us/resource/43nn-pn8j.json?$query=SELECT%0A%20%20%60camis%60%2C%0A%20%20%60dba%60%2C%0A%20%20%60boro%60%2C%0A%20%20%60building%60%2C%0A%20%20%60street%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60phone%60%2C%0A%20%20%60cuisine_description%60%2C%0A%20%20%60inspection_date%60%2C%0A%20%20%60action%60%2C%0A%20%20%60violation_code%60%2C%0A%20%20%60violation_description%60%2C%0A%20%20%60critical_flag%60%2C%0A%20%20%60score%60%2C%0A%20%20%60grade%60%2C%0A%20%20%60grade_date%60%2C%0A%20%20%60record_date%60%2C%0A%20%20%60inspection_type%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60council_district%60%2C%0A%20%20%60census_tract%60%2C%0A%20%20%60bin%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60nta%60%2C%0A%20%20%60location_point1%60%2C%0A%20%20%60%3A%40computed_region_efsh_h5xi%60%2C%0A%20%20%60%3A%40computed_region_f5dn_yrer%60%2C%0A%20%20%60%3A%40computed_region_yeji_bk3q%60%2C%0A%20%20%60%3A%40computed_region_92fq_4b7q%60%2C%0A%20%20%60%3A%40computed_region_sbqj_enih%60"

	resp, err := http.Get(apiEndpoint)
	if err != nil {
		fmt.Println("Error making GET request:", err)
		return model.GetRestaurantsResponse{}
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return model.GetRestaurantsResponse{}
	}

	// Parse JSON response into a slice of Restaurant
	var restaurants []model.Restaurant
	err = json.Unmarshal(body, &restaurants)
	if err != nil {
		fmt.Println("Error parsing JSON:", err)
		return model.GetRestaurantsResponse{}
	}

	// Display the parsed response
	fmt.Println("API Response:")
	for _, restaurant := range restaurants {
		fmt.Printf("%s\n", restaurant.Boro)
	}

	return model.GetRestaurantsResponse{
		Restaurants: restaurants,
	}
}
