require 'json'

get '/locations' do
  redirect '/'
end

get '/locations/new' do
  if request.xhr?
    erb :'/locations/_new',  locals:{location: @locations}, layout: false
  else
    erb :'/locations/_new'
  end
end

# create a new location
post '/locations' do
  @lat = Geocoder.coordinates(params[:location][:address])[0]
  @long = Geocoder.coordinates(params[:location][:address])[1]

  @locations = Locations.new(params[:location])
   # @locations = Locations.new(params[:location])

  if @locations.save
    @locations.update(lat: @lat, long: @long)
    if request.xhr?
        coor = Geocoder.coordinates(params[:location][:address])
        content_type :json
        coor_to_json(coor).to_json
    else
       Geocoder.coordinates(params[:location][:address])
       redirect '/'
    end
  end
 end


