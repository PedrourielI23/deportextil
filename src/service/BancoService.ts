import axios, { AxiosResponse } from 'axios';

//prueba
interface Banco {
    idBanco: number;
    nombreBanco: string;
    [key: string]: string | 
    number;
}

export default class BancoService {

    obtenerBanco(pCriterio: string): Promise<Banco[]> {
        const buscaUrl = '/capitalhumano/banco/buscaBanco/';
        const oValor = pCriterio.trim() === '' ? '%20' : pCriterio.trim();
        return axios.get(buscaUrl + oValor).then((response: AxiosResponse<Banco[]>) => response.data);
    }

    seleccionaBanco(pBanco: Banco): Promise<Banco> {
        const seleccionaUrl = '/capitalhumano/banco/seleccionaBanco';
        return axios.get(seleccionaUrl + '/' + pBanco.idBanco).then((response: AxiosResponse<Banco>) => response.data);
    }

    agregaBanco(pBanco: Banco): Promise<Banco> {
        const agregaUrl = '/capitalhumano/banco/agregaBanco';
        return axios.post(agregaUrl, pBanco).then((response: AxiosResponse<Banco>) => response.data);
    }

    actualizaBanco(pBanco: Banco): Promise<Banco> {
        const actualizaUrl = '/capitalhumano/banco/actualizaBanco';
        return axios.put(actualizaUrl + '/' + pBanco.idBanco, pBanco)
            .then((response: AxiosResponse<Banco>) => response.data);
    }

}