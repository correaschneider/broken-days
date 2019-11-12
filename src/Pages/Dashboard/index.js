import React from 'react';

import TableStriped from '../../Components/Tables/striped';
import Line from '../../Components/Charts/line';

export default class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Painel de Controle</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Compartilhar</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Exportar</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>Semana</button>
                    </div>
                </div>
                <Line />

                <h2>Vendas</h2>
                <TableStriped />
            </div>
        )
    }
}