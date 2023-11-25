package main

import (
	"fmt"
	"log"
	"net/http"

	"project/restaurants"
)

func main() {
	// GET API endpoint to fetch restaurants data
	http.HandleFunc("/restaurants", func(w http.ResponseWriter, r *http.Request) {
		restaurants.GetRestaurants(w, r)
	})

	fmt.Println("Server is running on http://localhost:8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
