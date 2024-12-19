namespace SpriteKind {
    export const Utility = SpriteKind.create()
    export const Planet = SpriteKind.create()
    export const MissionMand = SpriteKind.create()
}




let OvnTurnedOnToday = 0
let VaskemaskineTurnedOnToday = 0
let TørretumblerTurnedOnToday = 0
let FjernsynTurnedOnToday = 0
let FøntørrerTurnedOnToday = 0

let OvnTurnedOnTotal = 0
let VaskemaskineTurnedOnTotal = 0
let TørretumblerTurnedOnTotal = 0
let FjernsynTurnedOnTotal = 0
let FøntørrerTurnedOnTotal = 0

let LightsTurnedOnMin = 0
let FøntørrerTurnedOnTimer = 0
let FjernsynTurnedOnTimer = 0
let VaskemaskineTurnedOnTimer = 0
let TørretumblerTurnedOnTimer = 0
let OvnTurnedOnTimer = 0

let LightSwitchDelay = 0

let OvnTurnedOnMin = 0
let VaskemaskineTurnedOnMin = 0
let TørretumblerTurnedOnMin = 0
let FjernsynTurnedOnMin = 0
let FøntørrerTurnedOnMin = 0





let CurrentUsedOvn = 0
let CurrentUsedTørretumbler = 0
let CurrentUsedVaskemaskine = 0
let CurrentUsedFjernsyn = 0
let CurrentUsedFøntørrer = 0
let CurrentUsedLights = 0
let TotalCalculatedKwH = 0
let CalculatedKwHFjernsyn0 = 0
let CalculatedKwHTørretumbler0 = 0
let CalculatedKwHVaskemaskine0 = 0
let CalculatedKwHOvn0 = 0
let CalculatedKwHFøntørrer0 = 0
let CalculatedKwHLights0 = 0
let CalculatedKwHFjernsyn1 = 0
let CalculatedKwHTørretumbler1 = 0
let CalculatedKwHVaskemaskine1 = 0
let CalculatedKwHOvn1 = 0
let CalculatedKwHFøntørrer1 = 0
let CalculatedKwHLights1 = 0
let CalculatedKwHFjernsyn2 = 0
let CalculatedKwHTørretumbler2 = 0
let CalculatedKwHVaskemaskine2 = 0
let CalculatedKwHOvn2 = 0
let CalculatedKwHFøntørrer2 = 0
let CalculatedKwHLights2 = 0
let CurrentHourKwhUsed = 0
let CurrentCO2PrKwhGram = 0




let PriceOvn1 = 5500
let PriceOvn2 = 7000
let PriceTørretumbler1 = 3500
let PriceTørretumbler2 = 5000
let PriceVaskemaskine1 = 3500
let PriceVaskemaskine2 = 5500
let PriceFjernsyn1 = 3000
let PriceFjernsyn2 = 5000
let PriceFøntørrer1 = 500
let PriceFøntørrer2 = 1000
let PriceLys1 = 1750
let PriceLys2 = 2250

let LysCheckMark0 = true
let LysCheckMark1 = false
let LysCheckMark2 = false

let OvnCheckMark0 = true
let OvnCheckMark1 = false
let OvnCheckMark2 = false

let TørretumblerCheckMark0 = true
let TørretumblerCheckMark1 = false
let TørretumblerCheckMark2 = false

let VaskemaskineCheckMark0 = true
let VaskemaskineCheckMark1 = false
let VaskemaskineCheckMark2 = false

let FjernsynCheckMark0 = true
let FjernsynCheckMark1 = false
let FjernsynCheckMark2 = false

let FøntørrerCheckMark0 = true
let FøntørrerCheckMark1 = false
let FøntørrerCheckMark2 = false



let Straf = 0
let StrafTotal = 0
let StrafAntalGange = 0
let StrafToday = 0
let StrafTotalKwH = 0

let CurrentMin = 0
let Time = 0
let CurrentTime = 0
let CurrentDay = 0
let MinDurationMs = 0


let CO2 = 0
let Kwh = 0
let CurrentGreenPower = 0
let PengeBrugPåKwH = 0


let ArrowSelector: Sprite = null
let NumberToText = ""


let Svar = ""
let Spørgsmål = 0
let RigtigeSpørgsmål = 0


let CloneBadeværelse: tiles.TileMapData = null
let CloneKøkken: tiles.TileMapData = null
let CloneSoveværelse: tiles.TileMapData = null
let CloneStue: tiles.TileMapData = null


let ModerJord: Sprite = null
let MainCharacter: Sprite = null



let Gang: number[] = []
let Køkken: number[] = []
let Badeværelse: number[] = []
let Soveværelse: number[] = []
let Stue: number[] = []

let MainCharacterPosRow = 0
let MainCharacterPosCol = 0

let SelectorPosRow = 0
let SelectorPosCol = 0

let kWhPris = 0
let Money = 0

let CurrentTileMap = ""
let CurrentBuyMenu = ""
let CurrentEqiupmentInteraction = ""


let MenuTileMap = tilemap`level2`
let MainTileMap = tilemap`level`
let CO2Overblik = tilemap`level0`




//Start parametre

CurrentTileMap = "Main"
MainCharacterPosCol = 13
MainCharacterPosRow = 27


CurrentDay = 1
Time = 6
Money = 1000
CurrentTime = 60
MinDurationMs = 200
let HourDurationMs = MinDurationMs * 60





//sætter spillet igang

Startskærm()


// arvid
tiles.setCurrentTilemap(MainTileMap)
tileUtil.connectMaps(MenuTileMap, MainTileMap, MapConnectionKind.Door1)
tileUtil.connectMaps(CO2Overblik, MainTileMap, MapConnectionKind.Door2)
MainCharacter = sprites.create(assets.image`MyGuyJim`, SpriteKind.Player)
tiles.placeOnTile(MainCharacter, tiles.getTileLocation(MainCharacterPosCol, MainCharacterPosRow))
controller.moveSprite(MainCharacter, 150, 150)
scene.cameraFollowSprite(MainCharacter)
let PlayBoy = sprites.create(assets.image`PlaystationMand`, SpriteKind.MissionMand)
tiles.placeOnTile(PlayBoy, tiles.getTileLocation(57, 14))
let FrogMand = sprites.create(assets.image`Froggy man`, SpriteKind.MissionMand)
tiles.placeOnTile(FrogMand, tiles.getTileLocation(57, 6))
let WindMølle = sprites.create(assets.image`WindMand`, SpriteKind.MissionMand)
tiles.placeOnTile(WindMølle, tiles.getTileLocation(57, 27))
let ToiletMand = sprites.create(assets.image`ToiletMand`, SpriteKind.MissionMand)
tiles.placeOnTile(ToiletMand, tiles.getTileLocation(57, 32))
let VaskeMand = sprites.create(assets.image`VaskeMand`, SpriteKind.MissionMand)
tiles.placeOnTile(VaskeMand, tiles.getTileLocation(57, 20))
let AbeFar = sprites.create(assets.image`Abefar`, SpriteKind.MissionMand)
tiles.placeOnTile(AbeFar, tiles.getTileLocation(57, 9))
let OvnBoy = sprites.create(assets.image`OvnMand`, SpriteKind.MissionMand)
tiles.placeOnTile(OvnBoy, tiles.getTileLocation(57, 37))

//vVldemar
Stue = []
Soveværelse = []
Badeværelse = []
Køkken = []
DefineRooms(Stue, 8, 16, 17, 7)
DefineRooms(Soveværelse, 7, 6, 3, 7)
DefineRooms(Badeværelse, 7, 7, 3, 14)
DefineRooms(Køkken, 13, 4, 3, 2)
DefineRooms(Gang, 5, 13, 11, 7)
LightSwitch("Badeværelse")
LightSwitch("Køkken")
LightSwitch("Stue")
LightSwitch("Soveværelse")
let GameIsAcive = true










//Denne funktion Bruges i starten for at lave et array med col og row på alle tiles de de kaldte rum
// Valdemar

function DefineRooms (RoomToDefine: number[], XCol: number, XRow: number, StartCol: number, StartRow: number) {
    for (let index = 0; index <= XCol - 1; index++) {
        for (let index2 = 0; index2 <= XRow - 1; index2++) {
            RoomToDefine.push(StartCol + index)
            RoomToDefine.push(StartRow + index2)
        }
    }
}



//Denne funktion bruges til at købe ting, så når man i købe menuen vælger en ting og køber den styrer den så pengene, placering af de nye enhder osv.
//Valdemar




function KøbEnhed(Col: number, Row: number) {
    if (CurrentBuyMenu == "Vaskemaskine") {
        if (Col == 6 && Row == 3) {
            if (Money >= PriceVaskemaskine1) {
                Money -= PriceVaskemaskine1
                VaskemaskineCheckMark1 = true
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 2), assets.tile`Black1`)) {
                    LightSwitch("Badeværelse")
                    tiles.setTileAt(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineMidSlukket`)
                    LightSwitch("Badeværelse")
                } else {
                    tiles.setTileAt(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineMidSlukket`)
                }
                VaskemaskineTurnedOnMin = 0
                CurrentUsedVaskemaskine = 1
                
            } else {
                tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
                game.splash("Du har ikke råd til denne enhed")
            }
        } else if (Col == 6 && Row == 5) {
            if (Money >= PriceVaskemaskine2) {
                Money -= PriceVaskemaskine2
                VaskemaskineCheckMark2 = true
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 2), assets.tile`Black1`)) {
                    LightSwitch("Badeværelse")
                    tiles.setTileAt(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineNySlukket`)
                    LightSwitch("Badeværelse")
                } else {
                    tiles.setTileAt(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineNySlukket`)
                }
                VaskemaskineTurnedOnMin = 0
                CurrentUsedVaskemaskine = 2
            } else {
                tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
                game.splash("Du har ikke råd til denne enhed")
            }
        }
    }

    


    if (CurrentBuyMenu == "Tørretumbler") {
        if (Col == 6 && Row == 3) {
            if (Money >= PriceTørretumbler1) {
                Money -= PriceTørretumbler1
                TørretumblerCheckMark1 = true
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 2), assets.tile`Black1`)) {
                    LightSwitch("Badeværelse")
                    tiles.setTileAt(tiles.getTileLocation(9, 20), assets.tile`tørretumblerMidSlukket`)
                    LightSwitch("Badeværelse")
                } else {
                    tiles.setTileAt(tiles.getTileLocation(9, 20), assets.tile`tørretumblerMidSlukket`)
                }
                TørretumblerTurnedOnMin = 0
                CurrentUsedTørretumbler = 1
                
            } else {
                tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
                game.splash("Du har ikke råd til denne enhed")
            }
        } else if (Col == 6 && Row == 5) {
            if (Money >= PriceTørretumbler2) {
                Money -= PriceTørretumbler2
                TørretumblerCheckMark2 = true
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 2), assets.tile`Black1`)) {
                    LightSwitch("Badeværelse")
                    tiles.setTileAt(tiles.getTileLocation(9, 20), assets.tile`tørrerumblerNySlukket`)
                    LightSwitch("Badeværelse")
                } else {
                    tiles.setTileAt(tiles.getTileLocation(9, 20), assets.tile`tørrerumblerNySlukket`)
                }
                TørretumblerTurnedOnMin = 0
                CurrentUsedTørretumbler = 2

            } else {
                tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
                game.splash("Du har ikke råd til denne enhed")
            }
        }
    }


    if (CurrentBuyMenu == "Ovn") {
        if (Col == 6 && Row == 3) {
            if (Money >= PriceOvn1) {
                Money -= PriceOvn1
                OvnCheckMark1 = true
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 2), assets.tile`Black1`)) {
                    LightSwitch("Køkken")
                    tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`ovnMidSlukket`)
                    LightSwitch("Køkken")
                } else {
                    tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`ovnMidSlukket`)
                }
                OvnTurnedOnMin = 0
                CurrentUsedOvn = 1


            } else {
                tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
                game.splash("Du har ikke råd til denne enhed")
            }
        } else if (Col == 6 && Row == 5) {
            if (Money >= PriceOvn2) {
                Money -= PriceOvn2
                OvnCheckMark2 = true
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 2), assets.tile`Black1`)) {
                    LightSwitch("Køkken")
                    tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`ovnNySlukket`)
                    LightSwitch("Køkken")
                } else {
                    tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`ovnNySlukket`)
                }
                OvnTurnedOnMin = 0
                CurrentUsedOvn = 2
            } else {
                tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
                game.splash("Du har ikke råd til denne enhed")
            }
        }
    }



    if (CurrentBuyMenu == "Føntørrer") {
        if (Col == 6 && Row == 3) {
            if (Money >= PriceFøntørrer1) {
                Money -= PriceFøntørrer1
                FøntørrerCheckMark1 = true
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 14), assets.tile`Black1`)) {
                    LightSwitch("Badeværelse")
                    tiles.setTileAt(tiles.getTileLocation(6, 14), assets.tile`føntørrerMidSlukket`)
                    LightSwitch("Badeværelse")
                } else {
                    tiles.setTileAt(tiles.getTileLocation(6, 14), assets.tile`føntørrerMidSlukket`)
                }
                FøntørrerTurnedOnMin = 0
                CurrentUsedFøntørrer = 1
                
            } else {
                tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
                game.splash("Du har ikke råd til denne enhed")
            }
        } else if (Col == 6 && Row == 5) {
            if (Money >= PriceFøntørrer2) {
                Money -= PriceFøntørrer2
                FøntørrerCheckMark2 = true
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 14), assets.tile`Black1`)) {
                    LightSwitch("Badeværelse")
                    tiles.setTileAt(tiles.getTileLocation(6, 14), assets.tile`føntørrerNySlukket`)
                    LightSwitch("Badeværelse")
                } else {
                    tiles.setTileAt(tiles.getTileLocation(6, 14), assets.tile`føntørrerNySlukket`)
                }
                FøntørrerTurnedOnMin = 0
                CurrentUsedFøntørrer = 2

                
            } else {
                tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
                game.splash("Du har ikke råd til denne enhed")
            }
        }
    }


    if (CurrentBuyMenu == "Fjernsyn") {
        if (Col == 6 && Row == 3) {
            if (Money >= PriceFjernsyn1) {
                Money -= PriceFjernsyn1
                FjernsynCheckMark1 = true
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(17, 7), assets.tile`Black1`)) {
                    LightSwitch("Stue")
                    tiles.setTileAt(tiles.getTileLocation(19, 18), assets.tile`tvmøbel1Mid`)
                    tiles.setTileAt(tiles.getTileLocation(20, 18), assets.tile`tvmøbel2Mid`)
                    tiles.setTileAt(tiles.getTileLocation(21, 18), assets.tile`tvmøbel3Mid`)
                    LightSwitch("Stue")
                } else {
                    tiles.setTileAt(tiles.getTileLocation(19, 18), assets.tile`tvmøbel1Mid`)
                    tiles.setTileAt(tiles.getTileLocation(20, 18), assets.tile`tvmøbel2Mid`)
                    tiles.setTileAt(tiles.getTileLocation(21, 18), assets.tile`tvmøbel3Mid`)
                }
                FjernsynTurnedOnMin = 0
                CurrentUsedFjernsyn = 1
                
            } else {
                tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
                game.splash("Du har ikke råd til denne enhed")
            }
        } else if (Col == 6 && Row == 5) {
            if (Money >= PriceFjernsyn2) {
                Money -= PriceFjernsyn2
                FjernsynCheckMark2 = true
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(17, 7), assets.tile`Black1`)) {
                    LightSwitch("Stue")
                    tiles.setTileAt(tiles.getTileLocation(19, 18), assets.tile`tvmøbel1Ny`)
                    tiles.setTileAt(tiles.getTileLocation(20, 18), assets.tile`tvmøbel2Ny`)
                    tiles.setTileAt(tiles.getTileLocation(21, 18), assets.tile`tvmøbel3Ny`)
                    LightSwitch("Stue")
                } else {
                    tiles.setTileAt(tiles.getTileLocation(19, 18), assets.tile`tvmøbel1Ny`)
                    tiles.setTileAt(tiles.getTileLocation(20, 18), assets.tile`tvmøbel2Ny`)
                    tiles.setTileAt(tiles.getTileLocation(21, 18), assets.tile`tvmøbel3Ny`)
                }
                FjernsynTurnedOnMin = 0
                CurrentUsedFjernsyn = 2
            } else {
                tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
                game.splash("Du har ikke råd til denne enhed")
            }
        }
    }
    if (CurrentBuyMenu == "Lys") {
        if (Col == 6 && Row == 3) {
            if (Money >= PriceLys1) {
                Money -= PriceLys2
                LysCheckMark1 = true
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
                tiles.setTileAt(tiles.getTileLocation(16, 16), assets.tile`WallBtnStueMid`)
                tiles.setTileAt(tiles.getTileLocation(15, 6), assets.tile`WallBtnKøkkenMid`)
                tiles.setTileAt(tiles.getTileLocation(10, 8), assets.tile`WallBtnToiletSoveværelseMid`)
                tiles.setTileAt(tiles.getTileLocation(10, 14), assets.tile`WallBtnToiletSoveværelseMid`)
                LightsTurnedOnMin = 0
                CurrentUsedLights = 1
            } else {
                tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
                game.splash("Du har ikke råd til denne enhed")
            }
        } else if (Col == 6 && Row == 5) {
            if (Money >= PriceLys2) {
                Money -= PriceLys2
                LysCheckMark2 = true
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
                tiles.setTileAt(tiles.getTileLocation(16, 16), assets.tile`WallBtnStueNy`)
                tiles.setTileAt(tiles.getTileLocation(15, 6), assets.tile`WallBtnKøkkenNy`)
                tiles.setTileAt(tiles.getTileLocation(10, 8), assets.tile`WallBtnToiletSoveværelseNy`)
                tiles.setTileAt(tiles.getTileLocation(10, 14), assets.tile`WallBtnToiletSoveværelseNy`)
                LightsTurnedOnMin = 0
                CurrentUsedLights = 2
            } else {
                tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
                game.splash("Du har ikke råd til denne enhed")
            }
        }
    



    }
}












//Disse funktioner bliver styret af userinputs som f.eks når man trykker på B skal den tænde for enehder eller trykker på Menu skal den vise menu skærmen
// Valdemar



controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CurrentEqiupmentInteraction == "Ovn") {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 3), assets.tile`ovnGammelSlukket`)) {
            tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`ovnGammelTændt`)
            CurrentUsedOvn = 0
            CurrentEqiupmentInteraction = ""
        }else if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 3), assets.tile`ovnMidSlukket`)) {
            tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`ovnMidTændt`)
            CurrentUsedOvn = 1
            CurrentEqiupmentInteraction = ""

        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 3), assets.tile`ovnNySlukket`)) {
            tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`ovnNyTændt`)
            CurrentUsedOvn = 2
            CurrentEqiupmentInteraction = ""
        }

    } else if (CurrentEqiupmentInteraction == "Tørretumbler") {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 20), assets.tile`tørretumblerLowSlukket`)) {
            tiles.setTileAt(tiles.getTileLocation(9, 20), assets.tile`tørretumblerLowTændt`)
            CurrentUsedTørretumbler = 0
            CurrentEqiupmentInteraction = ""
        }else if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 20), assets.tile`tørretumblerMidSlukket`)) {
            tiles.setTileAt(tiles.getTileLocation(9, 20), assets.tile`tørretumblerMidTændt`)
            CurrentUsedTørretumbler = 1
            CurrentEqiupmentInteraction = ""
        }   else if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 20), assets.tile`tørretumblerNySlukket`)) {
            tiles.setTileAt(tiles.getTileLocation(9, 20), assets.tile`tørretumblerNyTændt`)
            CurrentUsedTørretumbler = 2
            CurrentEqiupmentInteraction = ""
        }
    } else if (CurrentEqiupmentInteraction == "Vaskemaskine") {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineLowSlukket`)) {
            tiles.setTileAt(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineLowTændt`)
            CurrentUsedVaskemaskine = 0
            CurrentEqiupmentInteraction = ""
        }else if (tiles.tileAtLocationEquals(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineMidSlukket`)) {
            tiles.setTileAt(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineMidTændt`)
            CurrentUsedVaskemaskine = 1
            CurrentEqiupmentInteraction = ""
        }else if (tiles.tileAtLocationEquals(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineNySlukket`)) {
            tiles.setTileAt(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineNyTændt`)
            CurrentUsedVaskemaskine = 2
            CurrentEqiupmentInteraction = ""
        }
    } else if (CurrentEqiupmentInteraction == "Fjernsyn") {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(19, 18), assets.tile`tvmøbel1Low`)) {
            tiles.setTileAt(tiles.getTileLocation(21, 17), assets.tile`TV 11`)
            tiles.setTileAt(tiles.getTileLocation(20, 17), assets.tile`TV 12`)
            tiles.setTileAt(tiles.getTileLocation(19, 17), assets.tile`TV 7`)
            tiles.setTileAt(tiles.getTileLocation(20, 16), assets.tile`TV 13`)
            CurrentUsedFjernsyn = 0
            CurrentEqiupmentInteraction = ""
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(19, 18), assets.tile`tvmøbel1Mid`)) {
            tiles.setTileAt(tiles.getTileLocation(21, 17), assets.tile`TV 11`)
            tiles.setTileAt(tiles.getTileLocation(20, 17), assets.tile`TV 12`)
            tiles.setTileAt(tiles.getTileLocation(19, 17), assets.tile`TV 7`)
            tiles.setTileAt(tiles.getTileLocation(20, 16), assets.tile`TV 13`)
            CurrentUsedFjernsyn = 1
            CurrentEqiupmentInteraction = ""
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(19, 18), assets.tile`tvmøbel1Ny`)) {
            tiles.setTileAt(tiles.getTileLocation(21, 17), assets.tile`TV 11`)
            tiles.setTileAt(tiles.getTileLocation(20, 17), assets.tile`TV 12`)
            tiles.setTileAt(tiles.getTileLocation(19, 17), assets.tile`TV 7`)
            tiles.setTileAt(tiles.getTileLocation(20, 16), assets.tile`TV 13`)
            CurrentUsedFjernsyn = 2
            CurrentEqiupmentInteraction = ""
        }
    } else if (CurrentEqiupmentInteraction == "Føntørrer") {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(6, 14), assets.tile`føntørrerLowSlukket`)) {
            tiles.setTileAt(tiles.getTileLocation(6, 14), assets.tile`føntørrerLowTændt`)
            CurrentUsedFøntørrer = 0
            CurrentEqiupmentInteraction = ""
        }else if (tiles.tileAtLocationEquals(tiles.getTileLocation(6, 14), assets.tile`føntørrerMidSlukket`)) {
            tiles.setTileAt(tiles.getTileLocation(6, 14), assets.tile`føntørrerMidTændt`)
            CurrentUsedFøntørrer = 1
            CurrentEqiupmentInteraction = ""
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(6, 14), assets.tile`føntørrerNySlukket`)) {
            tiles.setTileAt(tiles.getTileLocation(6, 14), assets.tile`føntørrerNyTændt`)
            CurrentUsedFøntørrer = 2
            CurrentEqiupmentInteraction = ""
        }
    }
})






controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CurrentTileMap == "Main") {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
        ClearMenuScreen()
        SetNumbers(CurrentDay, 1, 1)
        SetNumbers(CO2, 1, 2)
        SetNumbers(Money, 1, 3)
        SetNumbers(CurrentCO2PrKwhGram, 1, 4)
        SetImage("Ur", 0, 1)
        SetImage("CO2", 0, 2)
        SetImage("Money", 0, 3)
        SetImage("CO2PrGram", 0, 4)
        SetUr(Time)
        tiles.setTileAt(tiles.getTileLocation(9, 7), assets.tile`Green`)
        CurrentTileMap = "Menu"
    } else if (CurrentTileMap == "Menu") {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
        SetNight()
        CurrentTileMap = "Main"
    }
})





// ---------------------------------------------------------------------------------------
// Disse funktioner har med ting der skal tænde og slukke efter nolge betingelser går op
//Tænder for udstyret efter spilleren kolliderer med en enhed
// laver dag og nat med en color extension som skifter tiles udenfor til lyserød og ændre farven til en mørkere nuance

//Valdemar






function LightSwitch(Room: string) {
    
    if (Room == "Stue" && FjernsynTurnedOnTimer == 0) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(17, 7), assets.tile`Brown0`)) {
            CloneStue = tileUtil.cloneMap(tileUtil.currentTilemap())
            for (let index7 = 0; index7 <= Stue.length - 1; index7++) {
                if (index7 % 2 == 0) {
                    tiles.setTileAt(tiles.getTileLocation(Stue[index7], Stue[index7 + 1]), assets.tile`Black1`)
                }
            }
            tiles.setWallAt(tiles.getTileLocation(17, 12), true)
            tiles.setWallAt(tiles.getTileLocation(17, 13), true)
            tiles.setWallAt(tiles.getTileLocation(17, 14), true)
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(17, 7), assets.tile`Black1`)) {
            tileUtil.forEachTileInMap(CloneStue, function (column, row, location) {
                if (column >= 17 && row >= 7 && column <= 24 && row <= 22) {
                    tiles.setTileAt(tiles.getTileLocation(column, row), tileUtil.getTileImage(CloneStue, tiles.getTileLocation(column, row)))
                }
            })
            tiles.setWallAt(tiles.getTileLocation(17, 12), false)
            tiles.setWallAt(tiles.getTileLocation(17, 13), false)
            tiles.setWallAt(tiles.getTileLocation(17, 14), false)
        }
    } else if (Room == "Soveværelse") {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 7), assets.tile`Brown0`)) {
            CloneSoveværelse = tileUtil.cloneMap(tileUtil.currentTilemap())
            for (let index8 = 0; index8 <= Soveværelse.length - 1; index8++) {
                if (index8 % 2 == 0) {
                    tiles.setTileAt(tiles.getTileLocation(Soveværelse[index8], Soveværelse[index8 + 1]), assets.tile`Black1`)
                }
            }
            tiles.setWallAt(tiles.getTileLocation(9, 10), true)
            tiles.setWallAt(tiles.getTileLocation(9, 11), true)
            tiles.setWallAt(tiles.getTileLocation(9, 12), true)
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 7), assets.tile`Black1`)) {
            tileUtil.forEachTileInMap(CloneSoveværelse, function (column, row, location) {
                if (column >= 3 && row >= 7 && column <= 9 && row <= 12) {
                    tiles.setTileAt(tiles.getTileLocation(column, row), tileUtil.getTileImage(CloneSoveværelse, tiles.getTileLocation(column, row)))
                }
            })
            tiles.setWallAt(tiles.getTileLocation(9, 10), false)
            tiles.setWallAt(tiles.getTileLocation(9, 11), false)
            tiles.setWallAt(tiles.getTileLocation(9, 12), false)
        }
    } else if (Room == "Køkken" && OvnTurnedOnTimer == 0) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 2), assets.tile`Brown0`)) {
            CloneKøkken = tileUtil.cloneMap(tileUtil.currentTilemap())
            for (let index9 = 0; index9 <= Køkken.length - 1; index9++) {
                if (index9 % 2 == 0) {
                    tiles.setTileAt(tiles.getTileLocation(Køkken[index9], Køkken[index9 + 1]), assets.tile`Black1`)
                }
            }
            tiles.setWallAt(tiles.getTileLocation(12, 5), true)
            tiles.setWallAt(tiles.getTileLocation(13, 5), true)
            tiles.setWallAt(tiles.getTileLocation(14, 5), true)
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 2), assets.tile`Black1`)) {
            tileUtil.forEachTileInMap(CloneKøkken, function (column, row, location) {
                if (column >= 3 && row >= 2 && column <= 15 && row <= 5) {
                    tiles.setTileAt(tiles.getTileLocation(column, row), tileUtil.getTileImage(CloneKøkken, tiles.getTileLocation(column, row)))
                }
            })
            tiles.setWallAt(tiles.getTileLocation(12, 5), false)
            tiles.setWallAt(tiles.getTileLocation(13, 5), false)
            tiles.setWallAt(tiles.getTileLocation(14, 5), false)
        }
    } else if (Room == "Badeværelse" && TørretumblerTurnedOnTimer == 0 && FøntørrerTurnedOnTimer == 0 && VaskemaskineTurnedOnTimer == 0) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 14), assets.tile`Brown0`)) {
            CloneBadeværelse = tileUtil.cloneMap(tileUtil.currentTilemap())
            for (let index10 = 0; index10 <= Badeværelse.length - 1; index10++) {
                if (index10 % 2 == 0) {
                    tiles.setTileAt(tiles.getTileLocation(Badeværelse[index10], Badeværelse[index10 + 1]), assets.tile`Black1`)
                }
            }
            tiles.setWallAt(tiles.getTileLocation(9, 15), true)
            tiles.setWallAt(tiles.getTileLocation(9, 16), true)
            tiles.setWallAt(tiles.getTileLocation(9, 17), true)
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 14), assets.tile`Black1`)) {
            tileUtil.forEachTileInMap(CloneBadeværelse, function (column, row, location) {
                if (column >= 3 && row >= 14 && column <= 9 && row <= 20) {
                    tiles.setTileAt(tiles.getTileLocation(column, row), tileUtil.getTileImage(CloneBadeværelse, tiles.getTileLocation(column, row)))
                }
            })
            tiles.setWallAt(tiles.getTileLocation(9, 15), false)
            tiles.setWallAt(tiles.getTileLocation(9, 16), false)
            tiles.setWallAt(tiles.getTileLocation(9, 17), false)
        }
    }
}



function TurnOnEquipment (WhatEquipment: string, MovePlayerCol: number, MovePlayerRow: number) {
    MainCharacterPosCol = tiles.locationXY(tiles.locationOfSprite(MainCharacter), tiles.XY.column)
    MainCharacterPosRow = tiles.locationXY(tiles.locationOfSprite(MainCharacter), tiles.XY.row)
    if(MainCharacterPosCol >= 0 && MainCharacterPosRow >= 0 && MainCharacterPosCol <= 25 && MainCharacterPosRow <= 25){
        if (WhatEquipment == "Ovn") {
            CurrentEqiupmentInteraction = WhatEquipment
            game.showLongText("Ovnen skal tændes 1 gang om dagen", DialogLayout.Bottom)
            game.showLongText("Du har haft tændt den " + convertToText(OvnTurnedOnToday) + " gange i dag", DialogLayout.Bottom)
            game.showLongText("Vil du tænde ovnen? - Tryk B", DialogLayout.Bottom)
        } else if (WhatEquipment == "Vaskemaskine") {
            CurrentEqiupmentInteraction = WhatEquipment
            game.showLongText("Vaskemaskinen skal tændes 1 gang om dagen", DialogLayout.Bottom)
            game.showLongText("Du har haft tændt den " + convertToText(VaskemaskineTurnedOnToday) + " gange i dag", DialogLayout.Bottom)
            game.showLongText("Vil du tænde vaskemaskinen? - Tryk B", DialogLayout.Bottom)
        } else if (WhatEquipment == "Tørretumbler") {
            CurrentEqiupmentInteraction = WhatEquipment
            game.showLongText("Tørretumbleren skal tændes 1 gang om dagen", DialogLayout.Bottom)
            game.showLongText("Du har haft tændt den " + convertToText(TørretumblerTurnedOnToday) + " gange i dag", DialogLayout.Bottom)
            game.showLongText("Vil du tænde tørretumbleren? - Tryk B", DialogLayout.Bottom)
        } else if (WhatEquipment == "Fjernsyn") {
            CurrentEqiupmentInteraction = WhatEquipment
            game.showLongText("Fjernsynet skal bruges 1 gang om dagen", DialogLayout.Bottom)
            game.showLongText("Du har haft tændt den " + convertToText(FjernsynTurnedOnToday) + " gange i dag", DialogLayout.Bottom)
            game.showLongText("Vil du tænde fjernsynet?- Tryk B", DialogLayout.Bottom)
        } else if (WhatEquipment == "Føntørrer") {
            CurrentEqiupmentInteraction = WhatEquipment
            game.showLongText("Føntørreren skal tændes 1 gang om dagen", DialogLayout.Bottom)
            game.showLongText("Du har haft tændt den " + convertToText(FøntørrerTurnedOnToday) + " gange i dag", DialogLayout.Bottom)
            game.showLongText("Vil du tænde Føntørreren? - Tryk B", DialogLayout.Bottom)
        } 
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(MainCharacterPosCol + MovePlayerCol, MainCharacterPosRow + MovePlayerRow))
    }
}




// Valdemar

function SetNight() {
    if (CurrentTime > 17 || CurrentTime < 6) {
        tileUtil.coverAllTiles(sprites.castle.tileGrass1, assets.tile`PinkGrass`)
        tileUtil.coverAllTiles(assets.tile`UdendørsLampe`, assets.tile`UdendørsLampe0`)
        tileUtil.coverAllTiles(assets.tile`FenceRightTCorner`, assets.tile`FenceCornerRightTCorner`)
        tileUtil.coverAllTiles(assets.tile`FenceRightBCorner`, assets.tile`FenceRightBCorner0`)
        tileUtil.coverAllTiles(assets.tile`FenceTopLCorner`, assets.tile`FenceTopLCorner0`)
        tileUtil.coverAllTiles(assets.tile`FenceStraightVandret`, assets.tile`FenceStraightVandret0`)
        tileUtil.coverAllTiles(assets.tile`FenceSraightDown`, assets.tile`FenceSraightDown0`)
        tileUtil.coverAllTiles(assets.tile`FenceStraightDownShort`, assets.tile`FenceStraightDownShort0`)
        color.setColor(3, color.__hsv(255, 255, 75))
        
    }else {
        tileUtil.coverAllTiles(sprites.castle.tileGrass1, sprites.castle.tileGrass1)
        tileUtil.coverAllTiles(assets.tile`UdendørsLampe`, assets.tile`UdendørsLampe`)
        tileUtil.coverAllTiles(assets.tile`FenceCornerRightTCorner`, assets.tile`FenceCornerRightTCorner`)
        tileUtil.coverAllTiles(assets.tile`FenceRightBCorner`, assets.tile`FenceRightBCorner`)
        tileUtil.coverAllTiles(assets.tile`FenceTopLCorner`, assets.tile`FenceTopLCorner`)
        tileUtil.coverAllTiles(assets.tile`FenceStraightVandret`, assets.tile`FenceStraightVandret`)
        tileUtil.coverAllTiles(assets.tile`FenceSraightDown`, assets.tile`FenceSraightDown`)
        tileUtil.coverAllTiles(assets.tile`FenceStraightDownShort`, assets.tile`FenceStraightDownShort`)
        color.setPalette(color.originalPalette)
    }
}









//-------------------------------------------------------------------------------------
// Disse 2 funktioner styrer start og slutskærmen og bliver kaldt efter spillet er slut og når spillet starter


// arvid og Valdemar

function Slutskærm() {
    GameIsAcive = false

    tiles.setCurrentTilemap(tilemap`BlankTileMap`)

    sprites.destroy(MainCharacter)
    sprites.destroyAllSpritesOfKind(SpriteKind.MissionMand)
    pause(500)
    scene.setBackgroundImage(assets.image`B11`)
    pause(500)
    scene.setBackgroundImage(assets.image`B10`)
    pause(500)
    scene.setBackgroundImage(assets.image`B9`)
    pause(500)
    scene.setBackgroundImage(assets.image`B8`)
    pause(500)
    scene.setBackgroundImage(assets.image`B7`)
    pause(500)
    scene.setBackgroundImage(assets.image`B6`)
    pause(500)
    scene.setBackgroundImage(assets.image`B5`)
    pause(500)
    scene.setBackgroundImage(assets.image`B4`)
    pause(500)
    scene.setBackgroundImage(assets.image`B3`)
    pause(500)
    scene.setBackgroundImage(assets.image`B2`)
    pause(500)
    scene.setBackgroundImage(assets.image`B1`)
    ModerJord = sprites.create(assets.image`Moderjord`, SpriteKind.Planet)
    ModerJord.setPosition(117, 33)
    game.showLongText("Hej igen. Velkommen tilbage.", DialogLayout.Bottom)
    game.showLongText("Håber du lærte noget. ", DialogLayout.Bottom)
    game.showLongText("Du har forhåbentligt ikke udledt alt for meget CO2.", DialogLayout.Bottom)
    game.showLongText("Lad se hvordan det gik.", DialogLayout.Bottom)
    game.showLongText("Her er din score: Elforbrug = " + Math.floor((TotalCalculatedKwH + StrafTotalKwH)) + " KwH", DialogLayout.Full)
    game.showLongText("gCO2e besparelse ved at bruge el på rigtige tidspunkter = " + Math.floor(((TotalCalculatedKwH * 218.73) - (CO2))) + " gCO2e", DialogLayout.Full)
    game.showLongText("Totale CO2-udledning(gram) = " + CO2 + " gCO2e", DialogLayout.Full)
    game.showLongText("Ved at tænke på bruge din strøm bæredygtigt, så har du sparet = " + Math.floor(((TotalCalculatedKwH * 4.13) - (PengeBrugPåKwH))) + " Kroner", DialogLayout.Full)
    game.showLongText("Hvilket svarer til = " + Math.floor(((TotalCalculatedKwH * 4.13 - PengeBrugPåKwH))*52) + " Kroner sparet på et år", DialogLayout.Full)
    game.showLongText("Du har svaret rigtig på " + RigtigeSpørgsmål + "/7", DialogLayout.Full)
    
    if ((TotalCalculatedKwH * (190.08*1.2)) > CO2) {
        game.showLongText("Samlet set må jeg indrømme, at du ikke er noget møjsvin... Undskyld!", DialogLayout.Full)
        game.showLongText("Rigtig godt arbejde. Jeg håbe du vil bruge den viden du har fået, til at forsætte på samme måde i virkeligheden", DialogLayout.Full)
        game.showLongText("Mange tak for nu! Du er min allerbedste ven!", DialogLayout.Full)

    } else {
        game.showLongText("JEG VIDSTE DET!!!", DialogLayout.Full)
        game.showLongText("Du er og bliver et forpulet møjsvin. Jeg håber du har dårlig samvittighed og træder på en legoklods.", DialogLayout.Full)
        game.showLongText("Du har vist brug for at spille dette spil igen!", DialogLayout.Full)
        game.showLongText("Håber ikke du skal noget i morgen, fordi det bliver en lang nat med den indsats du har lagt i!", DialogLayout.Full)

        
    }
}




// arvid
function Startskærm () {
    scene.setBackgroundImage(assets.image`B1`)
    ModerJord = sprites.create(assets.image`Moderjord`, SpriteKind.Planet)
    ModerJord.setPosition(117, 33)
    game.showLongText("Velkommen. Mit navn er Moderjord og jeg her for at forklare din mission.", DialogLayout.Bottom)
    game.showLongText("Ved du godt, at jorden har brug for din hjælp.", DialogLayout.Bottom)
    game.showLongText("Et sted du kunne starte, var med dit elforbrug. Dit forpulede milijøsvin!", DialogLayout.Bottom)
    game.showLongText("Du vil igennem dette spil tilegne dig viden til at mindske dit elforbrug.", DialogLayout.Bottom)
    game.showLongText("Lige omlidt bliver du sendt til Danmark, hvor din kommende bolig venter.", DialogLayout.Bottom)
    game.showLongText("De næste 7 dage skal du bo i denne bolig.", DialogLayout.Bottom)
    game.showLongText("Din mission er at bruge så lidt strøm som muligt.", DialogLayout.Bottom)
    game.showLongText("Dette skal du opnå ved at klare en mission hver dag. Missionerne finder du ved at gå til højre", DialogLayout.Full)
    game.showLongText("Hver dag åbnes der for en ny mission", DialogLayout.Bottom)
    game.showLongText("Du vil kunne tjene penge og dermed kunne opgradere dine elapparater.", DialogLayout.Bottom)
    game.showLongText("Det kan du gøre i butikken nede i venstre hjørne.", DialogLayout.Bottom)
    game.showLongText("Alle elapparater skal køre en gang om dagen så tænk over hvornår. Hvis dette ikke sker får du en straf", DialogLayout.Full)
    game.showLongText("På soveværelset finder du en Globus, som viser hvornår det er bedst at bruge strøm.", DialogLayout.Full)
    game.showLongText("For at tænde for tingene skal du blot gå hen til dem", DialogLayout.Bottom)
    game.showLongText("Hver dag har en varighed på 5 minutter. Så brug tiden fornuftigt. ", DialogLayout.Bottom)
    game.showLongText("Til sidst vil jeg sige, at der findes en menu, hvis du trykker på 'Menu' ", DialogLayout.Bottom)
    game.showLongText("Her kan du se klokken, dine penge, hvad dag det er, hvor meget co2 du har udledt og hvor bæredygtig strømmen er i nuværende time", DialogLayout.Full)
    game.showLongText("Når der er gået 7 dage, er spillet slut og vi ser hvordan du har klaret dig i løbet af ugen", DialogLayout.Full)



    effects.clouds.startScreenEffect(5000)
    game.showLongText("Held og lykke. Dit forpulede milijøsvin!!!!!", DialogLayout.Bottom)
    sprites.destroyAllSpritesOfKind(SpriteKind.Planet, effects.disintegrate, 500)
    pause(500)
    scene.setBackgroundImage(assets.image`B2`)
    pause(500)
    scene.setBackgroundImage(assets.image`B3`)
    pause(500)
    scene.setBackgroundImage(assets.image`B4`)
    pause(500)
    scene.setBackgroundImage(assets.image`B5`)
    pause(500)
    scene.setBackgroundImage(assets.image`B6`)
    pause(500)
    scene.setBackgroundImage(assets.image`B7`)
    pause(500)
    scene.setBackgroundImage(assets.image`B8`)
    pause(500)
    scene.setBackgroundImage(assets.image`B9`)
    pause(500)
    scene.setBackgroundImage(assets.image`B10`)
    scene.cameraShake(4, 1000)
    pause(500)
    scene.setBackgroundImage(assets.image`B11`)
}

















//----------------------------------------------------------------------------
//Disse funktioner styrer missionerne og bliver kaldt, når spilleren rør en af missionerne



//Arvid og Valdemar

function WindMølleSpørgsmål() {
    Spørgsmål = randint(1, 2)
    if (Spørgsmål == 1) {
        game.splash("Hvilket producerer mest vindenergi ift. størrelsen på landet?")
        Svar = game.askForString("Kina, Sverige eller danmark", 9)
        if (Svar == "danmark") {
            game.splash("Korrekt")
            game.splash("Belønning: 2500kr")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
            Money += 2500
            RigtigeSpørgsmål += 1
        } else {
            game.splash("Forkert. Danmark er det land i verden der relativt bruger ")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    } else {
        game.splash("Hvor % andel af Danmarks strøm kom fra vindenergi i 2020?")
        Svar = game.askForString("73, 49 eller 37", 9)
        if (Svar == "49") {
            game.splash("Korrekt")
            game.splash("Belønning: 2500kr")
            Money += 2500
            RigtigeSpørgsmål += 1
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else {
            game.splash("Forkert. Det var 49%.")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    }
    tiles.setWallAt(tiles.getTileLocation(40, 26), true)
    tiles.setWallAt(tiles.getTileLocation(40, 27), true)
}

function FrogSpørgsmål() {
    Spørgsmål = randint(1, 2)
    if (Spørgsmål == 1) {
        game.splash("Hvilken enhed måler man strømforbrug i?")
        Svar = game.askForString("kwh, gram eller kj", 9)
        if (Svar == "kwh") {
            game.splash("Korrekt")
            game.splash("Belønning: 3000kr")
            Money += 3000
            RigtigeSpørgsmål += 1
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else {
            game.splash("Forkert. Det var kWh.")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    } else {
        game.splash("Hvad skal man huske at gøre når man forlader sin bolig?")
        Svar = game.askForString("(sluk) for el-apparater eller (tænde) føntørreren?", 9)
        if (Svar == "sluk ") {
            game.splash("Korrekt")
            game.splash("Belønning: 3000kr")
            Money += 3000
            RigtigeSpørgsmål += 1
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else {
            game.splash("Forkert. Øv ingen penge til dig. Dumme.")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    }

    
    tiles.setWallAt(tiles.getTileLocation(40, 2), true)
    tiles.setWallAt(tiles.getTileLocation(40, 3), true)
    tiles.setWallAt(tiles.getTileLocation(40, 4), true)
}

function OvnSpørgsmål() {
    Spørgsmål = randint(1, 2)
    if (Spørgsmål == 1) {
        game.splash("Hvad bruger mindre strøm, når du skal opvarme noget mad?")
        Svar = game.askForString("ovn eller kogeplade", 9)
        if (Svar == "kogeplade") {
            game.splash("Korrekt")
            game.splash("Belønning: 1000kr")
            Money += 2000
            RigtigeSpørgsmål += 1
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else {
            game.splash("Forkert.Det var en kogeplade.")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    } else {
        game.splash("Hvilken indstilling bruger mindst strøm når du bruger din ovn?")
        Svar = game.askForString("alm, varmluft eller grill ", 9)
        if (Svar == "varmluft") {
            game.splash("Korrekt")
            game.splash("Belønning: 1000kr")
            Money += 2000
            RigtigeSpørgsmål += 1
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else {
            game.splash("Forkert. Det var varmluft.")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    }
    
    tiles.setWallAt(tiles.getTileLocation(40, 37), true)
    tiles.setWallAt(tiles.getTileLocation(40, 38), true)
}
function PlayBoySpørgsmål() {
    Spørgsmål = randint(1, 2)
    if (Spørgsmål == 1) {
        game.splash("Hvad kan du gøre for at reducere strømforbruget, når du gamer?")
        Svar = game.askForString("(Slukke) eller (spille) i 20 timer", 9)
        if (Svar == "slukke") {
            game.splash("Korrekt")
            game.splash("Belønning: 3500kr")
            Money += 3250
            RigtigeSpørgsmål += 1
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else {
            game.splash("Forkert. Du skal da slukke for spillet gå en tur i naturen.")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    } else {
        game.splash("Hvilket størrelse TV er mest bæredygtig?")
        Svar = game.askForString("55, 100 eller 26", 9)
        if (Svar == "26") {
            game.splash("Korrekt")
            game.splash("Belønning: 3500kr")
            Money += 3250
            RigtigeSpørgsmål += 1
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else {
            game.splash("Forkert. Jo større TV jo mere energi. Svaret var 26 tommer.")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
        
    }

    
    tiles.setWallAt(tiles.getTileLocation(40, 13), true)
    tiles.setWallAt(tiles.getTileLocation(40, 14), true)
}
function VaskeMaskineSpørgsmål() {
    Spørgsmål = randint(1, 2)
    if (Spørgsmål == 1) {
        game.splash("Hvornår bør du undgå at vaske tøj for at skåne klimaet?")
        Svar = game.askForString("Morgen, aften eller nat", 9)
        if (Svar == "aften") {
            game.splash("Korrekt")
            game.splash("Belønning: 4000kr")
            Money += 4000
            RigtigeSpørgsmål += 1
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else {
            game.splash("Forkert. Det var aften.")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    } else {
        game.splash("Hvornår skal man indstille vaskemaskinen til at starte for at bruge mest mulig vindenergi?")
        Svar = game.askForString("Morgen, aften eller nat", 9)
        if (Svar == "nat") {
            game.splash("Korrekt")
            game.splash("Belønning: 4000kr")
            Money += 4000
            RigtigeSpørgsmål += 1
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else {
            game.splash("Forkert. Det var nat.")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    }
    
    tiles.setWallAt(tiles.getTileLocation(40, 19), true)
    tiles.setWallAt(tiles.getTileLocation(40, 20), true)
}

function ToiletMandSpørgsmål() {
    Spørgsmål = randint(1, 2)
    if (Spørgsmål == 1) {
        game.splash(" Hvilken type elpære sparer mest strøm?")
        Svar = game.askForString("Glødepære, LED eller Halogenpære", 9)
        if (Svar == "led") {
            game.splash("Ja, Led bruger mindst strøm")
            game.splash("Belønning: 1500kr")
            Money += 2750
            RigtigeSpørgsmål += 1
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else if (Svar == "LED") {
            game.splash("Ja, Led bruger mindst strøm")
            game.splash("Belønning: 1500kr")
            Money += 2750
            RigtigeSpørgsmål += 1
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else {
            game.splash("Forkert. LED bruger mindst strøm")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    } else {
        game.splash("Er følgende udsagn rigtig eller falsk")
        Svar = game.askForString("Opladere bruger kun strøm, når de oplader", 9)
        if (Svar == "rigtig") {
            game.splash("Nej, de bruger altid strøm, hvis de sidder i en tændt stikkontakt.")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else if (Svar == "falsk") {
            game.splash("Ja, de bruger altid strøm, hvis de sidder i en tændt stikkontakt.")
            game.splash("Belønning: 1500kr")
            RigtigeSpørgsmål += 1
            Money += 2750
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    }
    
    tiles.setWallAt(tiles.getTileLocation(40, 31), true)
    tiles.setWallAt(tiles.getTileLocation(40, 31), true)
   
}


function AbeFarSpørgsmål() {
    Spørgsmål = randint(1, 2)
    if (Spørgsmål == 1) {
        game.splash("Hvilket el-apparat bruger mest strøm?")
        Svar = game.askForString("Tørretumbler, tyverialarm eller fjernsyn", 9)
        if (Svar == "tørrerumbler") {
            game.splash("Korrekt")
            game.splash("Belønning: 1000kr")
            Money += 2000
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 21))
        } else {
            game.splash("Forkert. Det var tørretumbler.")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    } else {
        game.splash("Hvad er grunden til det er en god ide at spare på strømmen?")
        Svar = game.askForString("(klimaet), spare (penge) eller (impotens)?", 9)
        if (Svar == "klimaet") {
            game.splash("Korrekt")
            game.splash("Belønning: 1000kr")
            Money += 2000
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        } else {
            game.splash("Forkert. Vi skal self beskytte klimaet. Din nød.")
            tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 22))
        }
    }

    
    tiles.setWallAt(tiles.getTileLocation(40, 9), true)
    tiles.setWallAt(tiles.getTileLocation(40, 10), true)
}

















//------------------------------------------------------------------------------
// Disse funktioner bruges til at berenge forskellige elemeter når de bliver kaldt blandt andet straf, kWh brugt og hvad den aktuelle kWhPris og gCO2 udledning pr kWh er.
// Valdemar




function CO2PrKwhGram() {
    if (CurrentTime == 1) {
        CurrentCO2PrKwhGram = 181.82
        kWhPris = 1.01/39*100
    } else if (CurrentTime == 2) {
        CurrentCO2PrKwhGram = 183.98
        kWhPris = 0.97/39*100
    } else if (CurrentTime == 3) {
        CurrentCO2PrKwhGram = 187.42
        kWhPris = 0.94/39*100
    } else if (CurrentTime == 4) {    
        CurrentCO2PrKwhGram = 192.87
        kWhPris = 0.94/39*100
    } else if (CurrentTime == 5) {
        CurrentCO2PrKwhGram = 193.91
        kWhPris = 1.01/39*100
    } else if (CurrentTime == 6) {
        CurrentCO2PrKwhGram = 189.27
        kWhPris = 1.21/39*100
    } else if (CurrentTime == 7) {
        CurrentCO2PrKwhGram = 186.31
        kWhPris = 1.42/39*100
    } else if (CurrentTime == 8) {
        CurrentCO2PrKwhGram = 189.95
        kWhPris = 1.43/39*100
    }else if (CurrentTime == 9) {
        CurrentCO2PrKwhGram = 199.15
        kWhPris = 1.25/39*100
    }else if (CurrentTime == 10) {
        CurrentCO2PrKwhGram = 206.35
        kWhPris = 1.08/39*100
    }else if (CurrentTime == 11) {
        CurrentCO2PrKwhGram = 215.60
        kWhPris = 0.96/39*100
    }else if (CurrentTime == 12) {
        CurrentCO2PrKwhGram = 218.73
        kWhPris = 0.88/39*100
    }else if (CurrentTime == 13) {
        CurrentCO2PrKwhGram = 209.13
        kWhPris = 0.82/39*100
    }else if (CurrentTime == 14) {
        CurrentCO2PrKwhGram = 195.38
        kWhPris = 0.82/39*100
    }else if (CurrentTime == 15) {
        CurrentCO2PrKwhGram = 189.63
        kWhPris = 0.91/39*100
    }else if (CurrentTime == 16) {
        CurrentCO2PrKwhGram = 189.81
        kWhPris = 1.08/39*100
    }else if (CurrentTime == 17) {
        CurrentCO2PrKwhGram = 189.23
        kWhPris = 1.36/39*100
    }else if (CurrentTime == 18) {
        CurrentCO2PrKwhGram = 188.77
        kWhPris = 1.55/39*100
    }else if (CurrentTime == 19) {
        CurrentCO2PrKwhGram = 184.09
        kWhPris = 1.55/39*100
    }else if (CurrentTime == 20) {
        CurrentCO2PrKwhGram = 177.95
        kWhPris = 1.61/39*100
    }else if (CurrentTime == 21) {
        CurrentCO2PrKwhGram = 168.95
        kWhPris = 1.42/39*100
    }else if (CurrentTime == 22) {
        CurrentCO2PrKwhGram = 170.62
        kWhPris = 1.28/39*100
    }else if (CurrentTime == 23) {
        CurrentCO2PrKwhGram = 174.73
        kWhPris = 1.13/39*100
    }else if (CurrentTime == 24) {
        CurrentCO2PrKwhGram = 178.26
        kWhPris = 1.08/39*100
    }

    CurrentCO2PrKwhGram = Math.round(CurrentCO2PrKwhGram)
    
}



function CalculatedKwH() {

    
    
    if (CurrentUsedFjernsyn == 0) {
        CalculatedKwHFjernsyn0 = (FjernsynTurnedOnMin*(0.16/60))
    } else if (CurrentUsedFjernsyn == 1) {
        CalculatedKwHFjernsyn1 = (FjernsynTurnedOnMin*(0.042/60))
    } else if (CurrentUsedFjernsyn == 2) {
        CalculatedKwHFjernsyn2 = (FjernsynTurnedOnMin*(0.032/60))
    }


    if (CurrentUsedTørretumbler == 0) {
        CalculatedKwHTørretumbler0 = (TørretumblerTurnedOnMin*(0.9/60))
    } else if (CurrentUsedTørretumbler == 1) {  
        CalculatedKwHTørretumbler1 = (TørretumblerTurnedOnMin*(0.5320/60))
    } else if (CurrentUsedTørretumbler == 2) {    
        CalculatedKwHTørretumbler2 = (TørretumblerTurnedOnMin*(0.5050/60))
    }

    if (CurrentUsedVaskemaskine == 0) {
        CalculatedKwHVaskemaskine0 = (VaskemaskineTurnedOnMin*(0.2050/60))
    } else if (CurrentUsedVaskemaskine == 1) {
        CalculatedKwHVaskemaskine1 = (VaskemaskineTurnedOnMin*(0.1870/60))
    } else if (CurrentUsedVaskemaskine == 2) {
        CalculatedKwHVaskemaskine2 = (VaskemaskineTurnedOnMin*(0.1330/60))
    }

    if (CurrentUsedOvn == 0) {
        CalculatedKwHOvn0 = (OvnTurnedOnMin*(3/60))
    } else if (CurrentUsedOvn == 1) {
        CalculatedKwHOvn1 = (OvnTurnedOnMin*(2.5/60))
    } else if (CurrentUsedOvn == 2) {
        CalculatedKwHOvn2 = (OvnTurnedOnMin*(2/60))
    }

    if (CurrentUsedFøntørrer == 0) {
        CalculatedKwHFøntørrer0 = (FøntørrerTurnedOnMin*(2.5/60))
    } else if (CurrentUsedFøntørrer == 1) {
        CalculatedKwHFøntørrer1 = (FøntørrerTurnedOnMin*(2/60))
    } else if (CurrentUsedFøntørrer == 2) {
        CalculatedKwHFøntørrer2 = (FøntørrerTurnedOnMin*(1.5/60))
    }

    if (CurrentUsedLights == 0) {
        CalculatedKwHLights0 = (LightsTurnedOnMin*(0.0275/60))
    } else if (CurrentUsedLights == 1) {
        CalculatedKwHLights1 = (LightsTurnedOnMin*(0.0215/60))
    } else if (CurrentUsedLights == 2) {
        CalculatedKwHLights2 = (LightsTurnedOnMin*(0.0030/60))
    }
    CurrentHourKwhUsed = (CalculatedKwHFjernsyn0 + CalculatedKwHFjernsyn1 + CalculatedKwHFjernsyn2) + (CalculatedKwHFøntørrer0 + CalculatedKwHFøntørrer1 + CalculatedKwHFøntørrer2) + (CalculatedKwHLights0 + CalculatedKwHLights1 + CalculatedKwHLights2) + (CalculatedKwHOvn0 + CalculatedKwHOvn1 + CalculatedKwHOvn2) + (CalculatedKwHTørretumbler0 + CalculatedKwHTørretumbler1 + CalculatedKwHTørretumbler2) + (CalculatedKwHVaskemaskine0 + CalculatedKwHVaskemaskine1 + CalculatedKwHVaskemaskine2) - TotalCalculatedKwH
    TotalCalculatedKwH += CurrentHourKwhUsed
    
}





function StrafBeregner(Equipment: string) {
    if (Equipment == "Vaskemaskine") {
        if (CurrentUsedVaskemaskine == 0) {
            Straf = 218.73*(180 * (0.2050 / 60))
        } else if (CurrentUsedVaskemaskine == 1) {
            Straf = 218.73*(180 * (0.1870 / 60))
        } else if (CurrentUsedVaskemaskine == 2) {
            Straf = 218.73*(180 * (0.1330 / 60))
        }
    } else if (Equipment == "Tørretumbler") {
        if (CurrentUsedTørretumbler == 0) {
            Straf = 218.73*(165 * (0.9 / 60))
        } else if (CurrentUsedTørretumbler == 1) {
            Straf = 218.73*(165 * (0.5320 / 60))
        } else if (CurrentUsedTørretumbler == 2) {
            Straf = 218.73*(165 * (0.5050 / 60))
        }
    } else if (Equipment == "Fjernsyn") {
        if (CurrentUsedFjernsyn == 0) {
            Straf = 218.73*(210 * (0.16 / 60))
        } else if (CurrentUsedFjernsyn == 1) {
            Straf = 218.73*(210 * (0.042 / 60))
        } else if (CurrentUsedFjernsyn == 2) {
            Straf = 218.73*(210 * (0.032 / 60))
        }
    } else if (Equipment == "Ovn") {
        if (CurrentUsedOvn == 0) {
            Straf = 218.73*(20 * (3 / 60))
        } else if (CurrentUsedOvn == 1) {
            Straf = 218.73*(20 * (2.5 / 60))
        } else if (CurrentUsedOvn == 2) {
            Straf = 218.73*(20 * (2 / 60))
        }
    } else if (Equipment == "Føntørrer") {
        if (CurrentUsedFøntørrer == 0) {
            Straf = 218.73*(10 * (2.5 / 60))
        } else if (CurrentUsedFøntørrer == 1) {
            Straf = 218.73*(10 * (2 / 60))
        } else if (CurrentUsedFøntørrer == 2) {
            Straf = 218.73*(10 * (1.5 / 60))
        }
    } 

    StrafAntalGange += 1
    StrafToday += Straf
    StrafTotal += Straf
    StrafTotalKwH += (Straf / 218.73)
}



















//------------------------------------------------------------------------------------------------
// Disse er alle funktioner der er tidsbestemte og bruges til at styre spillets cyklus med timer og minutter. Bruges også til at tjekke for forskellige betingelser og styre andre funktioner
//Valdemar


game.onUpdateInterval(HourDurationMs, function () {
    if (GameIsAcive) {
        CurrentTime += 1
        CurrentMin = 0
        if (CurrentTime == 24) {
            

            if (CurrentDay > OvnTurnedOnTotal) {
                StrafBeregner("Ovn")
                OvnTurnedOnTotal += 1
                
            } 

            if (CurrentDay > FøntørrerTurnedOnTotal) {
                StrafBeregner("Føntørrer")
                FøntørrerTurnedOnTotal += 1
                
            }

            if (CurrentDay > VaskemaskineTurnedOnTotal) {
                StrafBeregner("Vaskemaskine")
                VaskemaskineTurnedOnTotal += 1
                
            }

            if (CurrentDay > TørretumblerTurnedOnTotal) {
                StrafBeregner("Tørretumbler")
                TørretumblerTurnedOnTotal += 1
                
            }

            if (CurrentDay > FjernsynTurnedOnTotal) {
                StrafBeregner("Fjernsyn")
                FjernsynTurnedOnTotal += 1
                
            }

            FøntørrerTurnedOnToday = 0
            OvnTurnedOnToday = 0
            VaskemaskineTurnedOnToday = 0
            TørretumblerTurnedOnToday = 0
            FjernsynTurnedOnToday = 0
            CurrentTime = 1
            CurrentDay += 1
           

            if (CurrentDay == 2) {
                //Abefar
                tiles.setWallAt(tiles.getTileLocation(40, 9), false)
                tiles.setWallAt(tiles.getTileLocation(40, 10), false)
            } else if (CurrentDay == 3) {
                //Playboy
                tiles.setWallAt(tiles.getTileLocation(40, 13), false)
                tiles.setWallAt(tiles.getTileLocation(40, 14), false)
            } else if (CurrentDay == 4) {
                //VaskeMaskine
                tiles.setWallAt(tiles.getTileLocation(40, 19), false)
                tiles.setWallAt(tiles.getTileLocation(40, 20), false)
            } else if (CurrentDay == 5) {
                //wind
                tiles.setWallAt(tiles.getTileLocation(40, 26), false)
                tiles.setWallAt(tiles.getTileLocation(40, 27), false)
            } else if (CurrentDay == 6) {
                //Toiletmand
                tiles.setWallAt(tiles.getTileLocation(40, 31), false)
                tiles.setWallAt(tiles.getTileLocation(40, 32), false)
            } else if (CurrentDay == 7) { 
                //Ovn
                tiles.setWallAt(tiles.getTileLocation(40, 37), false)
                tiles.setWallAt(tiles.getTileLocation(40, 38), false)
            }


            
            if (StrafAntalGange > 0) {
                game.showLongText("Du har fået en staf fordi du manglede at tænde " + StrafAntalGange +" enheder", DialogLayout.Full)
                game.showLongText("Det vil sige at din CO2 udledning stiger tilsvarende med, at de var tændt på det mindst bæredygtige tindspunkt", DialogLayout.Full)
                game.showLongText("Straf: " +Math.round(StrafToday)+ " gCO2e, hvilket er "+ Math.round((StrafToday-(StrafToday/218.73*168.95))) +" gCO2e mere end, hvis du havde tændt dem på rette tidspunkter", DialogLayout.Full)
                StrafAntalGange = 0

            }

            if (CurrentDay == 8) {
                GameIsAcive = false
                Slutskærm()
            }

            

        }
      

        
        SetNight()
        CalculatedKwH()
        CO2PrKwhGram()   
        if (CurrentTime > 12) {
            Time = CurrentTime - 12
        } else {
            Time = CurrentTime
        }
        if (CurrentTileMap == "Menu") {
            SetUr(Time)
            SetNumbers(CurrentCO2PrKwhGram, 1, 4)
            SetNumbers(CurrentDay, 1, 1)
        }
        


        if (CurrentTime == 23) {
            MinDurationMs = 100
        }
        if (CurrentTime == 6) {
            MinDurationMs = 200
        }
        
        CO2 += Math.round((CurrentHourKwhUsed * CurrentCO2PrKwhGram)+StrafToday)
        PengeBrugPåKwH = PengeBrugPåKwH + (PengeBrugPåKwH * kWhPris)
        StrafToday = 0
        
        
    }

    
})


game.onUpdateInterval(1000, function () {
    if (LightSwitchDelay == 2) {
        LightSwitchDelay = 0
    } else if (LightSwitchDelay < 2 && LightSwitchDelay != 0) {
        LightSwitchDelay += 1
    }
})
    
    
game.onUpdateInterval(MinDurationMs, function () {

    if (CurrentMin < 60) {
        CurrentMin += 1
    } else {
        CurrentMin = 0
    }
    if (CurrentTileMap == "Menu") {
        SetNumbers(CurrentMin, 8, 7)
        if (CurrentMin < 10) {
            SetNumbers(CurrentMin, 9, 7)
            SetNumbers(0, 8, 7)
        } else {
            SetNumbers(CurrentMin, 8, 7)
        }
    }
    if (GameIsAcive) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 3), assets.tile`ovnGammelTændt`) || tiles.tileAtLocationEquals(tiles.getTileLocation(4, 3), assets.tile`ovnMidTændt`) || tiles.tileAtLocationEquals(tiles.getTileLocation(4, 3), assets.tile`ovnNyTændt`)) {
            OvnTurnedOnTimer += 1
            if (OvnTurnedOnTimer >= 20) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 3), assets.tile`ovnGammelTændt`)) {
                    tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`ovnGammelSlukket`)
                } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 3), assets.tile`ovnMidTændt`)) {
                    tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`ovnMidSlukket`)
                } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 3), assets.tile`ovnNyTændt`)) {
                    tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`ovnNySlukket`)
                }
                OvnTurnedOnTimer = 0
                OvnTurnedOnToday += 1
                OvnTurnedOnTotal += 1
            }
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 20), assets.tile`tørretumblerLowTændt`) || tiles.tileAtLocationEquals(tiles.getTileLocation(9, 20), assets.tile`tørretumblerMidTændt`) || tiles.tileAtLocationEquals(tiles.getTileLocation(9, 20), assets.tile`tørretumblerNyTændt`)) {
            TørretumblerTurnedOnTimer += 1
            if (TørretumblerTurnedOnTimer >= 165) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 20), assets.tile`tørretumblerLowTændt`)) {
                    tiles.setTileAt(tiles.getTileLocation(9, 20), assets.tile`tørretumblerLowSlukket`)
                } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 20), assets.tile`tørretumblerMidTændt`)) {
                    tiles.setTileAt(tiles.getTileLocation(9, 20), assets.tile`tørretumblerMidSlukket`)
                } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 20), assets.tile`tørretumblerNyTændt`)) {
                    tiles.setTileAt(tiles.getTileLocation(9, 20), assets.tile`tørretumblerNySlukket`)
                }
                TørretumblerTurnedOnTimer = 0
                TørretumblerTurnedOnToday += 1
                TørretumblerTurnedOnTotal += 1

            }
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineLowTændt`) || tiles.tileAtLocationEquals(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineMidTændt`) || tiles.tileAtLocationEquals(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineNyTændt`)) {
            VaskemaskineTurnedOnTimer += 1
            if (VaskemaskineTurnedOnTimer >= 180 ) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineLowTændt`)) {
                    tiles.setTileAt(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineLowSlukket`)
                } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineMidTændt`)) {
                    tiles.setTileAt(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineMidSlukket`)
                } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineNyTændt`)) {
                    tiles.setTileAt(tiles.getTileLocation(3, 20), assets.tile`vaskemaskineNySlukket`)
                }
                VaskemaskineTurnedOnTimer = 0
                VaskemaskineTurnedOnToday += 1
                VaskemaskineTurnedOnTotal += 1
            }
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(21, 17), assets.tile`TV 11`)) {
            FjernsynTurnedOnTimer += 1
            if (FjernsynTurnedOnTimer >= 210) {
                tiles.setTileAt(tiles.getTileLocation(21, 17), assets.tile`TV 1`)
                tiles.setTileAt(tiles.getTileLocation(20, 17), assets.tile`TV 4`)
                tiles.setTileAt(tiles.getTileLocation(19, 17), assets.tile`TV 6`)
                tiles.setTileAt(tiles.getTileLocation(20, 16), assets.tile`TV 2`)
                FjernsynTurnedOnTimer = 0
                FjernsynTurnedOnToday += 1
                FjernsynTurnedOnTotal += 1
            }
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(6, 14), assets.tile`føntørrerLowTændt`) || tiles.tileAtLocationEquals(tiles.getTileLocation(6, 14), assets.tile`føntørrerMidTændt`) || tiles.tileAtLocationEquals(tiles.getTileLocation(6, 14), assets.tile`føntørrerNyTændt`)) {
            FøntørrerTurnedOnTimer += 1
            if ( FøntørrerTurnedOnTimer >= 15) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(6, 14), assets.tile`føntørrerLowTændt`)) {
                    tiles.setTileAt(tiles.getTileLocation(6, 14), assets.tile`føntørrerLowSlukket`)
                } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(6, 14), assets.tile`føntørrerMidTændt`)) {
                    tiles.setTileAt(tiles.getTileLocation(6, 14), assets.tile`føntørrerMidSlukket`)
                } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(6, 14), assets.tile`føntørrerNyTændt`)) {
                    tiles.setTileAt(tiles.getTileLocation(6, 14), assets.tile`føntørrerNySlukket`)
                }
                FøntørrerTurnedOnTimer = 0
                FøntørrerTurnedOnToday += 1
                FøntørrerTurnedOnTotal += 1
            
            }
        }
        EquipmentTurnedOnTime()
    }
})
game.onUpdateInterval(500, function () {
    if (GameIsAcive) {
        MainCharacterPosCol = tiles.locationXY(tiles.locationOfSprite(MainCharacter), tiles.XY.column)
        MainCharacterPosRow = tiles.locationXY(tiles.locationOfSprite(MainCharacter), tiles.XY.row)
        if (MainCharacterPosCol >= 10 && MainCharacterPosRow >= 6 && MainCharacterPosCol <= 16 && MainCharacterPosRow <= 20) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 19), assets.tile`Black1`)) {
                for (let index5 = 0; index5 <= Gang.length - 1; index5++) {
                    if (index5 % 2 == 0) {
                        tiles.setTileAt(tiles.getTileLocation(Gang[index5], Gang[index5 + 1]), assets.tile`Brown0`)
                    }
                }
            }
        } else {
            for (let index6 = 0; index6 <= Gang.length - 1; index6++) {
                if (index6 % 2 == 0) {
                    tiles.setTileAt(tiles.getTileLocation(Gang[index6], Gang[index6 + 1]), assets.tile`Black1`)
                }
            }
        }
    }
})
game.onUpdateInterval(100, function () {
    if (GameIsAcive) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 7), assets.tile`myTile13`) || tiles.tileAtLocationEquals(tiles.getTileLocation(9, 0), assets.tile`myTile13`)) {
            MainCharacterPosCol = tiles.locationXY(tiles.locationOfSprite(MainCharacter), tiles.XY.column)
            MainCharacterPosRow = tiles.locationXY(tiles.locationOfSprite(MainCharacter), tiles.XY.row)
            sprites.destroy(MainCharacter)
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), sprites.castle.tileGrass1)) {
            sprites.destroy(ArrowSelector)
        }
    }
    if (MainCharacter.overlapsWith(FrogMand)) {
        FrogSpørgsmål()
    } else if (MainCharacter.overlapsWith(OvnBoy)) {
        OvnSpørgsmål()
    } else if (MainCharacter.overlapsWith(VaskeMand)) {
        VaskeMaskineSpørgsmål()
    } else if (MainCharacter.overlapsWith(AbeFar)) {
        AbeFarSpørgsmål()
    } else if (MainCharacter.overlapsWith(PlayBoy)) {
        PlayBoySpørgsmål()
    } else if (MainCharacter.overlapsWith(ToiletMand)) {
        ToiletMandSpørgsmål()
    } else if (MainCharacter.overlapsWith(WindMølle)) {
        WindMølleSpørgsmål()
    }
})



function EquipmentTurnedOnTime() {
    

    if (FjernsynTurnedOnTimer > 0) {
        FjernsynTurnedOnMin += 1
    }
    if (TørretumblerTurnedOnTimer > 0) {
        TørretumblerTurnedOnMin += 1
    }
    if (VaskemaskineTurnedOnTimer > 0) {
        VaskemaskineTurnedOnMin += 1
    }
    if (OvnTurnedOnTimer > 0) {
        OvnTurnedOnMin += 1
    }
    if(FøntørrerTurnedOnTimer > 0) {
        FøntørrerTurnedOnMin += 1
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 19), assets.tile`Brown0`)) {
        LightsTurnedOnMin += 1
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 14), assets.tile`Brown0`)) {
        LightsTurnedOnMin += 1
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 2), assets.tile`Brown0`)) {
        LightsTurnedOnMin += 1
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 7), assets.tile`Brown0`)) {
        LightsTurnedOnMin += 1
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(17, 7), assets.tile`Brown0`)) {
        LightsTurnedOnMin += 1
    }

    
    
    
}













//------------------------------------------------------------------------------------------------
// Disse funktioner bruges til at tjekke hvis en sprite kolliderer med en anden sprite og for at tjekke status for en sprite
// Valdemar


scene.onOverlapTile(SpriteKind.Utility, assets.tile`myTile13`, function (sprite, location) {
    CurrentBuyMenu = ""
    if (CurrentTileMap == "Globus") {
        tileUtil.loadConnectedMap(MapConnectionKind.Door2)
        
    } else {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    }
    CurrentTileMap = "Main"
    SetNight()
   
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`Globus`, function (sprite, location) {
    CurrentTileMap = "Globus"
    tiles.placeOnTile(MainCharacter, tiles.getTileLocation(6, 9))    
    tileUtil.loadConnectedMap(MapConnectionKind.Door2)
})





scene.onOverlapTile(SpriteKind.Player, assets.tile`tørretumblerLowSlukket`, function (sprite, location) {
    TurnOnEquipment("Tørretumbler", 0, -1)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`tørretumblerMidSlukket`, function (sprite, location) {
    TurnOnEquipment("Tørretumbler", 0, -1)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`tørretumblerNySlukket`, function (sprite, location) {
    TurnOnEquipment("Tørretumbler", 0, -1)
})









scene.onOverlapTile(SpriteKind.Player, assets.tile`vaskemaskineLowSlukket`, function (sprite, location) {
    TurnOnEquipment("Vaskemaskine", 0, -1)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`vaskemaskineMidSlukket`, function (sprite, location) {
    TurnOnEquipment("Vaskemaskine", 0, -1)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`vaskemaskineNySlukket`, function (sprite, location) {
    TurnOnEquipment("Vaskemaskine", 0, -1)
})









scene.onOverlapTile(SpriteKind.Player, assets.tile`føntørrerMidSlukket`, function (sprite, location) {
    TurnOnEquipment("Føntørrer", 0, 1)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`føntørrerNySlukket`, function (sprite, location) {
    TurnOnEquipment("Føntørrer", 0, 1)
})


scene.onOverlapTile(SpriteKind.Player, assets.tile`føntørrerLowSlukket`, function (sprite, location) {
    TurnOnEquipment("Føntørrer", 0, 1)
})








scene.onOverlapTile(SpriteKind.Player, assets.tile`ovnGammelSlukket`, function (sprite, location) {
    TurnOnEquipment("Ovn", 0, 1)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`ovnMidSlukket`, function (sprite, location) {
    TurnOnEquipment("Ovn", 0, 1)
})


scene.onOverlapTile(SpriteKind.Player, assets.tile`ovnNySlukket`, function (sprite, location) {
    TurnOnEquipment("Ovn", 0, 1)
})




scene.onOverlapTile(SpriteKind.Player, assets.tile`WallBtnToiletSoveværelseLow`, function (sprite, location) {
    if (LightSwitchDelay == 0) {
        LightSwitchDelay = 1

        if(MainCharacterPosRow > 11){
            LightSwitch("Badeværelse")
        } else {
            LightSwitch("Soveværelse")
        }
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`WallBtnKøkkenLow`, function (sprite, location) {
    if (LightSwitchDelay == 0) {
        LightSwitchDelay = 1
        LightSwitch("Køkken")
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`WallBtnStueLow`, function (sprite, location) {
    if (LightSwitchDelay == 0) {
        LightSwitchDelay = 1
        LightSwitch("Stue")
    }
})







scene.onOverlapTile(SpriteKind.Player, assets.tile`WallBtnToiletSoveværelseMid`, function (sprite, location) {
    if (LightSwitchDelay == 0) {
        LightSwitchDelay = 1
        if(MainCharacterPosRow > 11){
            LightSwitch("Badeværelse")
        } else {
            LightSwitch("Soveværelse")
        }
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`WallBtnKøkkenMid`, function (sprite, location) {
    if (LightSwitchDelay == 0) {
        LightSwitchDelay = 1
        LightSwitch("Køkken")
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`WallBtnStueMid`, function (sprite, location) {
    if (LightSwitchDelay == 0) {
        LightSwitchDelay = 1
        LightSwitch("Stue")
    }
})




scene.onOverlapTile(SpriteKind.Player, assets.tile`WallBtnToiletSoveværelseNy`, function (sprite, location) {
    if (LightSwitchDelay == 0) {
        LightSwitchDelay = 1
        if(MainCharacterPosRow > 11){
            LightSwitch("Badeværelse")
        } else {
            LightSwitch("Soveværelse")
        }
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`WallBtnKøkkenNy`, function (sprite, location) {
    if (LightSwitchDelay == 0) {
        LightSwitchDelay = 1
        LightSwitch("Køkken")
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`WallBtnStueNy`, function (sprite, location) {
    if (LightSwitchDelay == 0) {
        LightSwitchDelay = 1
        LightSwitch("Stue")
    }
})






sprites.onDestroyed(SpriteKind.Utility, function (sprite) {
    MainCharacter = sprites.create(assets.image`MyGuyJim`, SpriteKind.Player)
    scene.cameraFollowSprite(MainCharacter)
    controller.moveSprite(MainCharacter, 150, 150)
    tiles.placeOnTile(MainCharacter, tiles.getTileLocation(MainCharacterPosCol, MainCharacterPosRow))
    
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`KasseMaskine1`, function (sprite, location) {
    tiles.placeOnTile(MainCharacter, tiles.getTileLocation(MainCharacterPosCol+1, MainCharacterPosRow))
    tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    ClearMenuScreen()
    SetImage("Køb", 4, 1)
    SetImage("Inventar", 0, 3)
    SetNumbers(Money, 1, 7)
    SetImage("Money", 0, 7)
    
})

scene.onOverlapTile(SpriteKind.Utility, assets.tile`vaskemaskineMidTændt`, function (sprite, location) {
    ClearMenuScreen()
    CurrentBuyMenu = "Vaskemaskine"
    SetImage("EnergiMærker", 0, 1)
    SetImage("Vaskemaskiner", 1, 1)
    SetNumbers(1000, 2, 1)
    SetNumbers(PriceVaskemaskine1, 2, 3)
    SetNumbers(PriceVaskemaskine2, 2, 5)
    SetNumbers(Money, 1, 7)
    SetImage("Money", 0, 7)
    SetImage("Checkmark", 6,1)


})

scene.onOverlapTile(SpriteKind.Utility, assets.tile`tørretumblerMidTændt`, function (sprite, location) {
    ClearMenuScreen()
    CurrentBuyMenu = "Tørretumbler"
    SetImage("EnergiMærker", 0, 1)
    SetImage("Tørretumbler", 1, 1)
    SetNumbers(1000, 2, 1)
    SetNumbers(PriceTørretumbler1, 2, 3)
    SetNumbers(PriceTørretumbler2, 2, 5)
    SetNumbers(Money, 1, 7)
    SetImage("Money", 0, 7)
    SetImage("Checkmark", 6,1)


})



scene.onOverlapTile(SpriteKind.Utility, assets.tile`ovnMidTændt`, function (sprite, location) {
    ClearMenuScreen()
    CurrentBuyMenu = "Ovn"
    SetImage("EnergiMærker", 0, 1)
    SetImage("Ovn", 1, 1)
    SetNumbers(1000, 2, 1)
    SetNumbers(PriceOvn1, 2, 3)
    SetNumbers(PriceOvn2, 2, 5)
    SetNumbers(Money, 1, 7)
    SetImage("Money", 0, 7)
    SetImage("Checkmark", 6,1)
})

scene.onOverlapTile(SpriteKind.Utility, assets.tile`føntørrerMidTændt`, function (sprite, location) {
    ClearMenuScreen()
    CurrentBuyMenu = "Føntørrer"
    SetImage("EnergiMærker", 0, 1)
    SetImage("Føntørrer", 1, 1)
    SetNumbers(200, 2, 1)
    SetNumbers(PriceFøntørrer1, 2, 3)
    SetNumbers(PriceFøntørrer2, 2, 5)
    SetNumbers(Money, 1, 7)
    SetImage("Money", 0, 7)
    SetImage("Checkmark", 6,1)
})

scene.onOverlapTile(SpriteKind.Utility, assets.tile`TVButikMid`, function (sprite, location) {
    ClearMenuScreen()
    CurrentBuyMenu = "Fjernsyn"
    SetImage("EnergiMærker", 0, 1)
    SetImage("Fjernsyn", 1, 1)
    SetNumbers(1000, 2, 1)
    SetNumbers(PriceFjernsyn1, 2, 3)
    SetNumbers(PriceFjernsyn2, 2, 5)
    SetNumbers(Money, 1, 7)
    SetImage("Money", 0, 7)
    SetImage("Checkmark", 6,1)

    
})

scene.onOverlapTile(SpriteKind.Utility, assets.tile`Halogen`, function (sprite, location) {
    ClearMenuScreen()
    CurrentBuyMenu = "Lys"
    SetImage("EnergiMærker", 0, 1)
    SetImage("Lys", 1, 1)
    SetNumbers(1000, 2, 1)
    SetNumbers(PriceLys1, 2, 3)
    SetNumbers(PriceLys2, 2, 5)
    SetNumbers(Money, 1, 7)
    SetImage("Money", 0, 7)
    SetImage("Checkmark", 6,1)

    
})



scene.onOverlapTile(SpriteKind.Utility, assets.tile`EmptyCheckMark`, function (sprite, location) {
    SelectorPosCol = tiles.locationXY(tiles.locationOfSprite(ArrowSelector), tiles.XY.column)
    SelectorPosRow = tiles.locationXY(tiles.locationOfSprite(ArrowSelector), tiles.XY.row)
    if (SelectorPosCol == 6 && SelectorPosRow == 3) {
        Svar = game.askForString("Vil du købe denne enhed (ja/nej)", 3)
        if (Svar == "ja") {
            KøbEnhed(SelectorPosCol,SelectorPosRow)
        } else {
            tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
        }
            
    } else if (SelectorPosCol == 6 && SelectorPosRow == 5) {
        Svar = game.askForString("Vil du købe denne enhed (ja/nej)", 3)
        if (Svar == "ja") {
            KøbEnhed(SelectorPosCol, SelectorPosRow)
        } else {
            tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))
        }
    }

})


sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    if (CurrentTileMap != "Menu") {
        if (CurrentTileMap == "Globus") {
            ArrowSelector = sprites.create(assets.image`Arrow`, SpriteKind.Utility)
            controller.moveSprite(ArrowSelector, 200, 200)
            tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(4, 4))
            scene.cameraFollowSprite(ArrowSelector)
            
        }else{
        ArrowSelector = sprites.create(assets.image`Arrow`, SpriteKind.Utility)
        controller.moveSprite(ArrowSelector, 100, 100)
        tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(4, 6))
        }
    } else {
        ArrowSelector = sprites.create(assets.image`BlankSelector`, SpriteKind.Utility)
        tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(4, 4))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TV 2`, function (sprite, location) {
    TurnOnEquipment("Fjernsyn", 0, 5)
})






// Bruges til at effektiviserer de forskellige menuer, ved at lav en funktion som kan kaldes og dermed sætte forskellige tiles som f.eks tal og billeder
//Valdemar

function SetImage(WhatImage: string, Col: number, Row: number) {
    if (WhatImage == "CO2") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`CO2`)
    } else if (WhatImage == "Money") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`Money`)
    } else if (WhatImage == "Ur") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`Ur`)
    } else if (WhatImage == "CO2PrGram") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`TileCO2PrGram`)

    }else if (WhatImage == "Køb") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`Kø`)
        tiles.setTileAt(tiles.getTileLocation(Col + 1, Row), assets.tile`Øb`)
    } else if (WhatImage == "Inventar") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`vaskemaskineMidTændt`)
        tiles.setTileAt(tiles.getTileLocation(Col+2, Row-1), assets.tile`ovnMidTændt`)
        tiles.setTileAt(tiles.getTileLocation(Col+7, Row-1), assets.tile`føntørrerMidTændt`)
        tiles.setTileAt(tiles.getTileLocation(Col+9, Row), assets.tile`TVButikMid`)
        tiles.setTileAt(tiles.getTileLocation(Col , Row+2), assets.tile`Halogen`)
        tiles.setTileAt(tiles.getTileLocation(Col+9, Row+2), assets.tile`tørretumblerMidTændt`)

    }
    else if (WhatImage == "Vaskemaskiner") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`vaskemaskineLowTændt`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`vaskemaskineMidTændt`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`vaskemaskineNyTændt`)
        tiles.setWallAt(tiles.getTileLocation(Col, Row), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 2), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 4), true)
    }
    else if (WhatImage == "Tørretumbler") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`tørretumblerLowTændt`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`tørretumblerMidTændt`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`tørretumblerNyTændt`)
        tiles.setWallAt(tiles.getTileLocation(Col, Row), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 2), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 4), true)
    }
    else if (WhatImage == "Ovn") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`ovnGammelTændt`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`ovnMidTændt`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`ovnNyTændt`)
        tiles.setWallAt(tiles.getTileLocation(Col, Row), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 2), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 4), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 2), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 4), true)
    }
    else if (WhatImage == "Føntørrer") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`føntørrerLowTændt`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`føntørrerMidTændt`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`føntørrerNyTændt`)
        tiles.setWallAt(tiles.getTileLocation(Col, Row), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 2), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 4), true)
    }
    else if (WhatImage == "Fjernsyn") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`TVButikLow`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`TVButikMid`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`TVButikNy`)
        tiles.setWallAt(tiles.getTileLocation(Col, Row), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 2), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 4), true)
    } else if (WhatImage == "EnergiMærker") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`EnergiMærkeC`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`EnergiMærkeB`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`EnergiMærkeA`)
        tiles.setWallAt(tiles.getTileLocation(Col, Row), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 2), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 4), true)
    }else if (WhatImage == "Lys") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`Glødpærre`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`Halogen`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`LED`)
        tiles.setWallAt(tiles.getTileLocation(Col, Row), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 2), true)
        tiles.setWallAt(tiles.getTileLocation(Col, Row + 4), true)
    }else if (WhatImage == "Checkmark") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`CheckMark`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`EmptyCheckMark`)
        tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`EmptyCheckMark`)
        if (CurrentBuyMenu == "Vaskemaskine") {
            if (VaskemaskineCheckMark1) {
                    tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`CheckMark`)
                }
            if (VaskemaskineCheckMark2) {
                    tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`CheckMark`)
            }
        }else if (CurrentBuyMenu == "Tørretumbler") {
            if (TørretumblerCheckMark1) {
                tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`CheckMark`)
            }
            if (TørretumblerCheckMark2) {
                tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`CheckMark`)
            }
        }else if (CurrentBuyMenu == "Ovn") {
            if (OvnCheckMark1) {
                tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`CheckMark`)
            }
            if (OvnCheckMark2) {
                tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`CheckMark`)
            }
         } else if (CurrentBuyMenu == "Fjernsyn") {
            if (FjernsynCheckMark1) {
                tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`CheckMark`)
            }
            if (FjernsynCheckMark2) {
                tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`CheckMark`)
            }
        } else if (CurrentBuyMenu == "Føntørrer") {
            if (FøntørrerCheckMark1) {
                tiles.setTileAt(tiles.getTileLocation(Col, Row + 2), assets.tile`CheckMark`)
            }
            if (FøntørrerCheckMark2) {
                tiles.setTileAt(tiles.getTileLocation(Col, Row + 4), assets.tile`CheckMark`)
            }
            }
  
    }
    
}   


function ClearMenuScreen() {
    for (let index5 = 0; index5 <= 10 - 1; index5++) {
        for (let index6 = 0; index6 <= 8 - 1; index6++) {
            tiles.setTileAt(tiles.getTileLocation(index5, index6), assets.tile`Green`)
            tiles.setWallAt(tiles.getTileLocation(index5, index6), false)
        }
    }
    tiles.setTileAt(tiles.getTileLocation(9, 7), assets.tile`myTile13`)
    tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(9, 3))

}

function SetNumbers (num: number, StartCol: number, StartRow: number) {
    let ArrayWithNumbersToSet: string[] = []
    NumberToText = convertToText(num)
    for (let index3 = 0; index3 <= NumberToText.length - 1; index3++) {
        ArrayWithNumbersToSet.push(NumberToText.charAt(index3))
    }
    for (let index4 = 0; index4 <= ArrayWithNumbersToSet.length - 1; index4++) {
        if (ArrayWithNumbersToSet[index4] == "0") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num0`)
        } else if (ArrayWithNumbersToSet[index4] == "1") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num1`)
        } else if (ArrayWithNumbersToSet[index4] == "2") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num2`)
        } else if (ArrayWithNumbersToSet[index4] == "3") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num3`)
        } else if (ArrayWithNumbersToSet[index4] == "4") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num4`)
        } else if (ArrayWithNumbersToSet[index4] == "5") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num5`)
        } else if (ArrayWithNumbersToSet[index4] == "6") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num6`)
        } else if (ArrayWithNumbersToSet[index4] == "7") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num7`)
        } else if (ArrayWithNumbersToSet[index4] == "8") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num8`)
        } else if (ArrayWithNumbersToSet[index4] == "9") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num9`)
        }
    }
}





function SetUr (Time: number) {
    tiles.setTileAt(tiles.getTileLocation(7, 1), assets.tile`BigClockTL`)
    tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM`)
    tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`BigClockTR`)
    tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML`)
    tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM`)
    tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR`)
    tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`BigClockBL`)
    tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM`)
    tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`BigClockBR`)
    if (CurrentTime == 1) {
        tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM1`)
        tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`BigClockTR_KL1`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM1`)

        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num0`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num1`)
    } else if (CurrentTime == 2) {
        tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR2`)
        tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`BigClockTR_KL2`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM2`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num0`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num2`)
    } else if (CurrentTime == 3) {
        tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR3`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM3`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num0`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num3`)
    } else if (CurrentTime == 4) {
        tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR4`)
        tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`BigClockBR_KL4`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM4`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num0`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num4`)
    } else if (CurrentTime == 5) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM5`)
        tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`BigClockBR_KL5`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM5`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num0`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num5`)
    } else if (CurrentTime == 6) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM6`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM6`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num0`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num6`)
    } else if (CurrentTime == 7) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM7`)
        tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`BigClockBL_KL7`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM7`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num0`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num7`)
    } else if (CurrentTime == 8) {
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML8`)
        tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`BigClockBL_KL8`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM8`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num0`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num8`)
    } else if (CurrentTime == 9) {
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML9`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM9`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num0`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num9`)
    } else if (CurrentTime == 10) {
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML10`)
        tiles.setTileAt(tiles.getTileLocation(7, 1), assets.tile`BigClockTL_KL10`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM10`)
        
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num1`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num0`)
    } else if (CurrentTime == 11) {
        tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM11`)
        tiles.setTileAt(tiles.getTileLocation(7, 1), assets.tile`BigClockTL_KL11`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM11`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num1`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num1`)
    } else if (CurrentTime == 12) {
        tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM12`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM12`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num1`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num2`)
    }else if (CurrentTime == 13) {
        tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM1`)
        tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`BigClockTR_KL1`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM1`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num1`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num3`)
    } else if (CurrentTime == 14) {
        tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR2`)
        tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`BigClockTR_KL2`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM2`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num1`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num4`)
    } else if (CurrentTime == 15) {
        tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR3`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM3`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num1`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num5`)
    } else if (CurrentTime == 16) {
        tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR4`)
        tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`BigClockBR_KL4`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM4`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num1`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num6`)
    } else if (CurrentTime == 17) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM5`)
        tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`BigClockBR_KL5`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM5`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num1`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num7`)
    } else if (CurrentTime == 18) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM6`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM6`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num1`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num8`)
    } else if (CurrentTime == 19) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM7`)
        tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`BigClockBL_KL7`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM7`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num1`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num9`)
    } else if (CurrentTime == 20) {
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML8`)
        tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`BigClockBL_KL8`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM8`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num2`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num0`)
    } else if (CurrentTime == 21) {
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML9`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM9`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num2`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num1`)
    } else if (CurrentTime == 22) {
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML10`)
        tiles.setTileAt(tiles.getTileLocation(7, 1), assets.tile`BigClockTL_KL10`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM10`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num2`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num2`)
    } else if (CurrentTime == 23) {
        tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM11`)
        tiles.setTileAt(tiles.getTileLocation(7, 1), assets.tile`BigClockTL_KL11`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM11`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num2`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num3`)
    } else if (CurrentTime == 24) {
        tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM12`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM12`)
        
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`Num2`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`Num4`)
    }

    tiles.setTileAt(tiles.getTileLocation(7, 7), assets.tile`PrikPrik`)
}



