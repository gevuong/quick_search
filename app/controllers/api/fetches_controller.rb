class Api::FetchesController < ApplicationController
    def index
        nps = Api::Fetch.new
        if nps
            @nps_campgrounds = nps.campgrounds
            # render json: @nps_campgrounds <= for testing
            render :index
        else
            render json: nps.errors.full_messages
        end
    end
end
