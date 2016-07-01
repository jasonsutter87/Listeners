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
  p params
  @locations = Locations.new(params[:location])
  if @locations.save
    if request.xhr?
      p Geocoder.coordinates(params[:location][:address])
        redirect '/'
    else
       redirect '/'
    end
  end
 end


