require 'faker'


20.times do
	User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::Internet.user_name, email: Faker::Internet.email, password: Faker::App.name)
end

50.times do
	u = rand(1..19)
	l = rand(1..19)
	if u != l
		Listeners.create(listenee_id: User.find(u), listener_id: User.find(l))
	end
end

