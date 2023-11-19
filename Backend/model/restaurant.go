package model

type Restaurant struct {
	Camis                string
	DBA                  string
	Boro                 string
	Building             string
	Street               string
	ZipCode              string
	Phone                string
	CuisineDescription   string
	InspectionDate       string
	Action               string
	ViolationCode        string
	ViolationDescription string
	CriticalFlag         string
	Score                string
	Grade                string
	GradeDate            string
	RecordDate           string
	InspectionType       string
	Latitude             string
	Longitude            string
	CommunityBoard       string
	CouncilDestrict      string
	CensusTract          string
	BIN                  string
	BBL                  string
	NTA                  string
}

type GetRestaurantsRequest struct {
}

type GetRestaurantsResponse struct {
	Restaurants []Restaurant
}
