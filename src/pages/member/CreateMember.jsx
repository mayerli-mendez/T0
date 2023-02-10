import React from 'react';
import { MemberForm } from '../../components/organisms';
import { useNavigate } from "react-router-dom";

export const CreateMember = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="panel panel-info">
                    <h3>Solicitar afiliación</h3>
                    <MemberForm/>
                </div>
            </div>
        </div>
    );
}