require 'sinatra'
require 'data_mapper'
require './models/guests.rb'
require 'tilt/erb'

get '/' do
  erb :index
end

post '/invitees' do
  Guest.create(name: params[:name], attending: params[:attending], others: params[:others], additional: params[:additional],
               guest1_menu: params[:g1_menu], partner_name: params[:g2_name], partner_menu: params[:g2_menu], child_1_name: params[:g3_name],
               child_1_menu: params[:g3_menu], child_2_name: params[:g4_name], child_2_menu: params[:g4_menu], bbq: params[:bbq])
  redirect to('/rsvp_conf')
end

get '/secret' do
  @guests = Guest.all
  erb :secret
end

post '/secret' do
  entry = Guest.get(params[:id])
  entry.destroy
  redirect to ('/secret')
end

get '/info' do
  erb :info
end

get '/contact' do
  erb :contact
end

get '/rsvp_conf' do
  erb :rsvp_conf
end

get '/pictures' do
  erb :pictures
end

get '/travel' do
  erb :travel
end
