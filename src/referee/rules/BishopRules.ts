import { Piece, Position, samePosition, TeamType } from "../../Constants";
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied } from "./GeneralRules";

export const bishopMove = (initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean => {
    for(let i = 1; i < 8; i++) {
        // TOP RIGHT MOVEMENT AND ATTACK
        if(desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y) {
            let passedPosition: Position = { x: initialPosition.x + i, y: initialPosition.y + i };
            if(samePosition(passedPosition, desiredPosition)) {
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                    return true;
                }
            } else{
                if(tileIsOccupied(passedPosition, boardState)) {
                    break;
                }
            }
        }

        // BOTTOM RIGHT MOVEMENT AND ATTACK
        if(desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y) {
            let passedPosition: Position = { x: initialPosition.x + i, y: initialPosition.y - i };
            if(samePosition(passedPosition, desiredPosition)) {
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                    return true;
                }
            } else{
                if(tileIsOccupied(passedPosition, boardState)) {
                    break;
                }
            }
        }

        // TOP LEFT MOVEMENT AND ATTACK
        if(desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y) {
            let passedPosition: Position = { x: initialPosition.x - i, y: initialPosition.y + i };
            if(samePosition(passedPosition, desiredPosition)) {
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                    return true;
                }
            } else{
                if(tileIsOccupied(passedPosition, boardState)) {
                    break;
                }
            }
        }

        // BOTTOM LEFT MOVEMENT AND ATTACK
        if(desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y) {
            let passedPosition: Position = { x: initialPosition.x - i, y: initialPosition.y - i };
            if(samePosition(passedPosition, desiredPosition)) {
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                    return true;
                }
            } else{
                if(tileIsOccupied(passedPosition, boardState)) {
                    break;
                }
            }
        }
    }

    return false;
}