import React, { useState, useEffect } from "react";
import "./Form.scss";

import UIInput from "../../UI/Input/Input";
import UIButton from "../../UI/Button/Button";
import UISelect from "../../UI/Select/Select";

const LoginForm = () => {
  const [CRM, setCRM] = useState("");
  const [UF, setUF] = useState("");
  const [UFs, setUFs] = useState([]);
  const [error_CRM, setErrorCRM] = useState(false);
  const [error_UF, setErrorUF] = useState(false);

  useEffect(() => {
    (async function GetUFs() {
      try {
        const res = await fetch(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );
        const data = await res.json();
        setUFs(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  function ValidateSelect(valid_option) {
    return valid_option ? true : false
  }

  function ValidateInput(state, min_length) {
    return state.length < min_length ? false : true
  }

  function handleSubmit(e) {
    e.preventDefault();
    const is_select = ValidateSelect(UF)
    const is_crm_valid = ValidateInput(CRM, 5)

    if (!is_select || !is_crm_valid) {
      if (!is_select) setErrorUF(true)
      if (!is_crm_valid) setErrorCRM(true)
    } else {
      alert(`Sucesso!!! Seja bem vindo portador do CRM ${CRM} - ${UF}`)
    }
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div className={error_CRM ? "error" : ""}>
        <UIInput
          value={CRM}
          input_name="CRM"
          input_type="number"
          input_placeholder="000000"
          onChange={(e) => {setCRM(e.target.value); setErrorCRM(!ValidateInput(CRM, 5))}}
        />
        {error_CRM && (
          <span className="error__message">
            É necessário que haja pelo menos 5 números
          </span>
        )}
      </div>

      <div className={error_UF ? "error" : ""}>
        <UISelect
          name="UF"
          selected={UF}
          msg_default="Selecione"
          onChange={(e) => {setUF(e.target.value); setErrorUF(!ValidateSelect(e.target.value))}}
          options={UFs.map((UF) => UF.sigla).sort()}
        />
        {error_UF && (
          <span className="error__message">Por favor, selecione uma opção</span>
        )}
      </div>

      <UIButton type="submit" text="CONTINUE" />

      <span className="form__text">
        CANAL DE COMPRA EXCLUSIVO PARA CLASSE MÉDICA
      </span>
    </form>
  );
};

export default LoginForm;
