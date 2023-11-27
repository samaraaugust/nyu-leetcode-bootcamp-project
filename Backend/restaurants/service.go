package restaurants

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"project/model"
)

func GetRestaurants(w http.ResponseWriter, r *http.Request) {
	// get filters from URL query parameters
	camis := r.URL.Query().Get("camis")
	dba := r.URL.Query().Get("dba")
	boro := r.URL.Query().Get("boro")
	building := r.URL.Query().Get("building")
	street := r.URL.Query().Get("street")
	zipcode := r.URL.Query().Get("zipcode")
	cuisine := r.URL.Query().Get("cuisine")
	criticalFlag := r.URL.Query().Get("criticalFlag")
	score := r.URL.Query().Get("score")
	grade := r.URL.Query().Get("grade")

	// prepare request to filter data
	req := model.GetRestaurantsRequest{
		Camis:              camis,
		DBA:                dba,
		Boro:               boro,
		Building:           building,
		Street:             street,
		ZipCode:            zipcode,
		CuisineDescription: cuisine,
		CriticalFlag:       criticalFlag,
		Score:              score,
		Grade:              grade,
	}

	// get response data
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

	var restaurantsToReturn []model.Restaurant

	// Display the parsed response
	for _, r := range restaurants {
		filtersPassed := true

		if len(req.Camis) > 0 && r.Camis != req.Camis {
			filtersPassed = false
		}

		if len(req.DBA) > 0 && r.DBA != req.DBA {
			filtersPassed = false
		}

		if len(req.Boro) > 0 && r.Boro != req.Boro {
			filtersPassed = false
		}

		if len(req.Building) > 0 && r.Building != req.Building {
			filtersPassed = false
		}

		if len(req.Street) > 0 && r.Street != req.Street {
			filtersPassed = false
		}

		if len(req.ZipCode) > 0 && r.ZipCode != req.ZipCode {
			filtersPassed = false
		}

		if len(req.CuisineDescription) > 0 && r.CuisineDescription != req.CuisineDescription {
			filtersPassed = false
		}

		if len(req.CriticalFlag) > 0 && r.CriticalFlag != req.CriticalFlag {
			filtersPassed = false
		}

		if len(req.Score) > 0 && r.Score != req.Score {
			filtersPassed = false
		}

		if len(req.Grade) > 0 && r.Grade != req.Grade {
			filtersPassed = false
		}

		if filtersPassed {
			restaurantsToReturn = append(restaurantsToReturn, r)
		}
	}

	return model.GetRestaurantsResponse{
		Restaurants: restaurantsToReturn,
	}
}
