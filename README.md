# Wishlist simplistic
> Erfaringssankende prosjekt for en senere større utvidelse
> Metor FTW!

## Notater om utvikling

I retrospekt er det en del småting jeg ikke husker helt, men dette er greit å huske på
- appene som kjører er totalt usikret fram til man eksplisitt eventuelt sikrer dem (se https://www.meteor.com/try/10)
- jeg har lagt til kosefunksjonalitet som `Meteor.call('removeAllWishes')`
- bootstrap-wishes.js eksponerer en funksjon `createWishes()` som kan kjøres på klienten i konsollen
- man kan logge inn på den remote databasen slik `mongo meteor <navn på host/app>`
- man setter settings slik

```
$ meteor  deploy wishlist-christine --settings private/settings-christine.json
```
