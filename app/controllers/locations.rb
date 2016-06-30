get '/locations/new' do
  erb :'/locations/_new'
end

# create a new restraurant
post '/locations' do
   p params
   redirect '/'
end
