@campgrounds = @nps_campgrounds["data"]

@campgrounds.each do |campground|
    next if campground["name"].length <= 2
    json.set! campground["id"] do
        json.set! :name, campground["name"]
    end
end
