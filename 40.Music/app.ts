function makeAlbum(artist : string  , title : string) : {artist :string  ; title: string}  {
    const dicitionaries  = {
        artist : artist.charAt(0).toUpperCase()  + artist.slice(1),
        title : title.charAt(0).toUpperCase()  + title.slice(1)
    };
    return dicitionaries
}

let album  = makeAlbum("Ahmed"  ,  "Dark")
console.log(album)

album  = makeAlbum("Saeed"  ,  "Black")
console.log(album)

album  = makeAlbum("Khalid"  ,  "Yellow")
console.log(album)