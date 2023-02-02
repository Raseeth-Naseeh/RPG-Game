import { RpgPlayer, RpgPlayerHooks, Control, Move, RpgClassMap, RpgMap } from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.setGraphic('hero')
        player.setHitbox(32, 16)
        // player.changeMap('medieval')
        player.changeMap('medieval', {
            x: 200,
            y: 200
        })
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer) {
        player.hp = 500
    }
}
