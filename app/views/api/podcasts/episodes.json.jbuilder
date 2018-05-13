json.array! @episodes do |episode|
  json.title episode.title
  json.summary episode.summary
  json.audio episode.enclosure_url
  json.itunes_author episode.itunes_author
  json.user_id @current_user_id
end
