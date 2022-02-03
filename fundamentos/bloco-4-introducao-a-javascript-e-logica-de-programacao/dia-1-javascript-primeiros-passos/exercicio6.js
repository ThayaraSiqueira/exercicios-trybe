const pecaDeXadrez = "KnIgHt";

switch (pecaDeXadrez.toLowerCase()) {
    case "rook":
        console.log("Any number of squares vertical or horizontal");
        break;
    case "knight":
        console.log("Two squares vertical or horizontal and one in the opposite direction");
        break;
    case "bishop":
        console.log("Diagonal")
        break;
    case "queen":
        console.log("Any direction and any number of squares");
        break;
    case "king":
        console.log("One square to any direction");
        break;
        case "pawn":
        console.log("One square vertical in direction to the opposite field");
        break;
        default:
        console.log("Peça inválida");
        break;
};
