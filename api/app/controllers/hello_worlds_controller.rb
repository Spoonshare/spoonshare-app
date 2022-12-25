class HelloWorldsController < ApplicationController

  def index
    return {message: "hello world"}
  end
end
