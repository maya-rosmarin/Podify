json.set! @episode.id do
  json.title @episode.title
  json.summary @episode.summary
  json.audio @episode.audio
  json.itunes_author @episode.itunes_author
  json.user_id @current_user.id
end
