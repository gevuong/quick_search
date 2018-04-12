class Api::FetchesController < ApplicationController
    def index
        nps = Api::Fetch.new
        if nps
            @nps_campgrounds = nps.campgrounds
            # render json: @nps_campgrounds
            render :index
        else
            render json: nps.errors.full_messages # ["429 status code: Too many requests in the past hour"]
        end
    end
end
