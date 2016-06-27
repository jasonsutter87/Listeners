get "/users" do
	erb :'users/index'
end


get "/users/new" do
	erb :'users/new'
end


post "/users" do
  @user = User.new(params[:user])
  if @user.save #&& @user.password != nil
    redirect "/authorization"
  else
    @error = "Invalid information, double check your email is correct or that you have not already created an account with this email"
    erb :"/users/new"
  end
end


get "/users/:id" do
  @user = current_user
  erb :"/users/show"
end

### sign in page
get '/authorization' do
  erb :'/authorization/authorization'
end


### sign in user
post "/authorization" do
  @user = User.find_by(email: params[:user][:email])
  if @user.authenticate(params[:user][:password])
    session[:user_id] = @user.id
    redirect "/"
  else
    @error = "Sorry, try a new password or email!"
    erb :"/authorization/authorization"
  end
end

get "/signout" do
  session[:user_id] = nil
  redirect "/"
end

