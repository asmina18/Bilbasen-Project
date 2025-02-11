// Vi henter vores databaseforbindelse fra en anden fil
import sequelize from "../config/sequelizeClient.js";

// Vi henter Model og DataTypes fra Sequelize for at lave en model
import { Model, DataTypes } from "sequelize";

// Vi laver en model for biler
export class CarModel extends Model {}

// Her beskriver vi, hvilke oplysninger (felter) en bil skal have
CarModel.init({
    // Hver bil får et unikt ID, som automatisk tæller op
    id: {
        type: DataTypes.INTEGER,    // ID er et tal
        autoIncrement: true,        // Det tæller automatisk op (1, 2, 3, ...)
        allowNull: false,           // ID kan ikke være tomt
        primaryKey: true            // ID er bilens primære nøgle (unik identifikation)
    },
    // Bilens mærke, fx "Toyota"
    brand: {
        type: DataTypes.STRING,     // Det er en tekst
        allowNull: false            // Det skal udfyldes
    },
    // Bilens model, fx "Corolla"
    model: {
        type: DataTypes.STRING,     // Også tekst
        allowNull: false
    },
    // Bilens årgang, fx 2022
    year: {
        type: DataTypes.INTEGER,    // Det er et tal
        allowNull: false
    },
    // Bilens farve, fx "Rød"
    color: {
        type: DataTypes.STRING,     // Tekst
        allowNull: false
    },
    // Bilens pris, fx 19999.99 kr.
    price: {
        type: DataTypes.DOUBLE,     // Et tal med komma (decimaltal)
        allowNull: true,            // Det må være tomt, hvis man ikke skriver en pris
        defaultValue: 0.00          // Hvis man ikke skriver en pris, sættes den til 0.00
    }
}, {
    sequelize,                      // Forbind modellen til databasen

    modelName: 'car',               // Navnet på modellen i koden (bruges internt)

    underscored: true,              // Felter i databasen vil bruge _ i stedet for camelCase (fx created_at i stedet for createdAt)

    freezeTableName: true,          // Tabelnavnet i databasen forbliver "car", det ændres ikke til "cars"

    createdAt: true,                // Tidsstempel, der viser, hvornår bilen blev tilføjet
    updatedAt: true                 // Tidsstempel, der viser, hvornår bilen sidst blev ændret
});
