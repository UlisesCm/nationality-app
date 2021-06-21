import React from 'react'
import { useFetch } from '../hooks/useFetch'

import 'bootstrap/dist/css/bootstrap.css'

export const Interface = () => {

    fetch('https://api.nationalize.io?name=ulises')
        .then(resp => resp.json())
        .then(data => {
            console.log(data.country)
        })

    return (
        <div>
           {/*  <form>
                <h1>
                    Nationality App
                </h1>
                <hr/>
                <div className="form-group">
                   <input
                    type="text"
                    name="name"
                    placeholder="Escribe tu nombre (ej. ulises)"
                    className="form-control"
                    autoComplete="off"
                    /> 
                    <button type="submit" className="btn btn-primary">
                        Buscar
                    </button>
                </div>
                {
                    loading ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) : (
                        <div>
                            <h3>
                                Estadistica 1
                            </h3>
                            <h3>
                                Estadistica 2
                            </h3>
                            <h3>
                                Estadistica 3
                            </h3>
                        </div>
                    )
                }
                
                
            </form>
             */}
        </div>
    )
}
