import { RpgServer, RpgModule } from '@rpgjs/server'
import { MedievalMap } from './maps/medieval'
import { player } from './player'

@RpgModule<RpgServer>({
    maps:  [
        MedievalMap
    ],
    player
})
export default class RpgServerEngine { }