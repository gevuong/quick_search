class Api::CampgroundsController < ApplicationController
    def index
        nps = Api::Fetch.new
        if nps
            @nps_campgrounds = nps.campgrounds
            render :index
        else
            render json: nps.errors.full_messages
        end
    end
end
