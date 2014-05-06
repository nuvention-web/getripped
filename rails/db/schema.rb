# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140426005845) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attempts", force: true do |t|
    t.integer  "user_id"
    t.integer  "exercise_id"
    t.integer  "weight"
    t.integer  "reps1"
    t.integer  "reps2"
    t.integer  "reps3"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "exercises", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.string   "image"
    t.integer  "reps"
    t.integer  "sets"
    t.integer  "rest"
    t.integer  "weight"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "secret_token"
    t.string "password_digest"
  end

  create_table "workouts", force: true do |t|
    t.string   "name"
    t.string   "duration"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "workoutsets", force: true do |t|
    t.integer  "attempt_id"
    t.integer  "reps"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
