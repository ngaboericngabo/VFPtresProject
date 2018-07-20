/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tres.dao.impl;

import tres.dao.generic.AbstractDao;
import tres.dao.interfc.ILoginHistoric;
import tres.domain.LoginHistoric;
import java.net.InetAddress;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;


public class LoginHistoricImpl extends AbstractDao<Long, LoginHistoric> implements ILoginHistoric {

    @Override
    public LoginHistoric saveLoginHistoric(LoginHistoric loginHistoric) {
        try {
            return saveIntable(loginHistoric); //To change body of generated methods, choose Tools | Templates.
        } catch (Exception ex) {
            Logger.getLogger(LoginHistoricImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }

    @Override
    public List<LoginHistoric> getListLoginHistoric() {
        return (List<LoginHistoric>) (Object) getModelList(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public LoginHistoric getLoginHistoricById(int loginHistoricId, String primaryKeyclomunName) {
        return (LoginHistoric) getModelById(loginHistoricId, primaryKeyclomunName);//To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public LoginHistoric UpdateLoginHistoric(LoginHistoric loginHistoric) {
        return updateIntable(loginHistoric); //To change body of generated methods, choose Tools | Templates.
    }

    public boolean createTable() {
        creatingNewTable();
        return true;
    }

    @Override
    public String getMachineIp() {
        String ip = null;
        try {
            InetAddress Ip = InetAddress.getLocalHost();
            ip = Ip.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ip;
    }
}
