json.set! @episode.id do
  json.id @episode.id
  json.title @episode.title
  json.summary @episode.summary
  json.audio @episode.audio
  json.itunes_author @episode.itunes_author
  json.collection_name @episode.collection_name
  json.image_url @episode.image_url
end
