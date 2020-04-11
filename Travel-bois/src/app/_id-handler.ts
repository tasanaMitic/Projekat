import fs from 'fs'

export class IdHandler {
    static GenerateKolaID() {
        var rawData = fs.readFileSync('./_ids.json').toString();
        var ids = JSON.parse(rawData);
        var retID = parseInt(ids.kola) + 1;
        ids.kola = retID.toString();
        let data = JSON.stringify(ids);
        fs.writeFileSync('./_ids.json', data);
        return retID;
    }
    static GenerateLetID() {
        var rawData = fs.readFileSync('./_ids.json').toString();
        var ids = JSON.parse(rawData);
        var retID = parseInt(ids.let) + 1;
        ids.let = retID.toString();
        let data = JSON.stringify(ids);
        fs.writeFileSync('./_ids.json', data);
        return retID;
    }
}