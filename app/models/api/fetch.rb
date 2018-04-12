class Api::Fetch < ApplicationRecord
    include HTTParty

    #base_uri is a HTTParty class method
    base_uri('https://developer.nps.gov/api/v1')

    def initialize(limit = 50, api_key = generate_random_api_key)
        @options = {
            query: {
                limit: limit,
                api_key: api_key
                }
            }
    end

    def generate_random_api_key
        # Hourly limit: 1,000 requests. For more info: https://www.nps.gov/subjects/developer/guides.htm
        api_key = [
            "DgxI2OorIMB526wU4s8a380kHTqaokfjGMNISAzT"
        ]

        api_key.sample
    end

    def campgrounds
        self.class.get("/campgrounds", @options)
    end
end
