@campgrounds = @nps_campgrounds["data"]

@campgrounds.each do |campground|
    next if campground["name"].length <= 2
    json.set! campground["id"] do
        json.set! :name, campground["name"]
        json.set! :description, campground["description"]
        json.set! :image_url, "https://res.cloudinary.com/dtluc0y85/image/upload/v1523306878/header_humzpt.jpg"
    end
end
