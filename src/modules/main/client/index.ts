import { RpgClient, RpgModule } from '@rpgjs/client'
import { HeroCharacter } from './characters/hero'
import { Tilesets } from './maps/medieval'

@RpgModule<RpgClient>({
    spritesheets: [
        Tilesets, // The tileset of the previous steps
        HeroCharacter // We add our spritesheet !
    ]
})
export default class RpgClientModuleEngine {}