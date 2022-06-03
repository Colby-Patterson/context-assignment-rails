class Api::UsersController < ApplicationController

  
def index
  users = user.all
  render json: user
end

# # READ - single employee
# def show
#   @employee = Employee.find(params[:id])
#   render json: @employee
# end
end
