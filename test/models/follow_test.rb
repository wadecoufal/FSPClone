# == Schema Information
#
# Table name: follows
#
#  id            :bigint(8)        not null, primary key
#  follower_id   :integer          not null
#  followee_id   :integer          not null
#  followee_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class FollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end