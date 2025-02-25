import { useState } from "react";
import supabase from "../../supabase";
import { useNavigate } from "react-router-dom";

// CSS
import './compte.scss';

const UpdatePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      console.error("Erreur :", error.message);
    } else {
      console.log("Mot de passe mis à jour !");
      navigate("/user"); // Redirige après mise à jour
    }
  };

  return (
    <form onSubmit={handleUpdatePassword}>
      <input
        type="password"
        placeholder="Nouveau mot de passe"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button type="submit">Changer le mot de passe</button>
    </form>
  );
};

export default UpdatePassword;
