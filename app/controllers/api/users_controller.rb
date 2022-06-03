class Api::UsersController < ApplicationController

  
def index
  users = User.all
  render json: users
end

# # READ - single employee
# def show
#   @employee = Employee.find(params[:id])
#   render json: @employee
# end
end
