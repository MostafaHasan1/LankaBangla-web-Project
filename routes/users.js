const express = require("express");
const router = express.Router();
const db = require("../database/connection.js");

// GET all employees
router.get("/", (req, res) => {
  console.log("GOT REQUEST");
  const sql = "SELECT * FROM crm";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// POST a new employee
// router.post("/", (req, res) => {
//   const { name, email, nid } = req.body;
//   console.log({ name, email, nid });
//   const sql = "INSERT INTO employee (name, email, nid) VALUES (?, ?, ?)";
//   db.query(sql, [name, email, nid], (err, results) => {
//     if (err) throw err;
//     res.json({ message: "employee added." });
//   });
// });

router.post("/individual", (req, res) => {
  const {
    c_name,
    c_father_name,
    c_mother_name,
    c_account_type,
    c_opening_date,
    c_dob,
    c_sex,
    c_pre_add,
    c_pre_city,
    c_pre_post_code,
    c_pre_country,
    c_pre_tel,
    c_per_add,
    c_per_city,
    c_per_post_code,
    c_per_country,
    c_per_tel,
    c_type,
    c_division,
    c_mobile_num,
    c_email,
    c_occupation,
    c_etin,
    c_nationality,
    c_branch,
    c_bank_routing_num,
    c_bank_account_num,
    c_bank_branch_name,
    c_passport_num,
    c_operation_type,
    introducer_id,
    bo_id,
    nom_id,
    poa_id,
    internet_trading,
    dse,
    cse,
    oms,
    sms_service,
    email_service,
  } = req.body;
  // console.log({
  //   introducer_id,
  //   crm_name,
  //   crm_dob,
  //   crm_nid,
  //   crm_address,
  //   crm_email,
  //   crm_mobile_num,
  // });
  const sql =
    "INSERT INTO individual_acc (c_name,c_father_name,c_mother_name,c_account_type,c_opening_date,c_dob,c_sex,c_pre_add,c_pre_city,c_pre_post_code,c_pre_country,c_pre_tel,c_per_add,c_per_city,c_per_post_code,c_per_country,c_per_tel,c_type,c_division,c_mobile_num,c_email,c_occupation,c_etin,c_nationality,c_branch,c_bank_routing_num,c_bank_account_num,c_bank_branch_name,c_passport_num,c_operation_type,introducer_id,bo_id,nom_id,poa_id,internet_trading,dse,cse,oms,sms_service,email_service) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  db.query(
    sql,
    [
      c_name,
      c_father_name,
      c_mother_name,
      c_account_type,
      c_opening_date,
      c_dob,
      c_sex,
      c_pre_add,
      c_pre_city,
      c_pre_post_code,
      c_pre_country,
      c_pre_tel,
      c_per_add,
      c_per_city,
      c_per_post_code,
      c_per_country,
      c_per_tel,
      c_type,
      c_division,
      c_mobile_num,
      c_email,
      c_occupation,
      c_etin,
      c_nationality,
      c_branch,
      c_bank_routing_num,
      c_bank_account_num,
      c_bank_branch_name,
      c_passport_num,
      c_operation_type,
      introducer_id,
      bo_id,
      nom_id,
      poa_id,
      internet_trading,
      dse,
      cse,
      oms,
      sms_service,
      email_service,
    ],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "joint customer added." });
    }
  );
});

router.post("/joint", (req, res) => {
  const {
    c_name,
    c_father_name,
    c_mother_name,
    c_account_type,
    c_opening_date,
    c_dob,
    c_sex,
    c_pre_add,
    c_pre_city,
    c_pre_post_code,
    c_pre_country,
    c_pre_tel,
    c_per_add,
    c_per_city,
    c_per_post_code,
    c_per_country,
    c_per_tel,
    c_type,
    c_division,
    c_mobile_num,
    c_email,
    c_occupation,
    c_etin,
    c_nationality,
    c_branch,
    c_bank_routing_num,
    c_bank_account_num,
    c_bank_branch_name,
    c_passport_num,
    c_operation_type,
    j_name,
    j_fatther_name,
    j_mother_name,
    j_dob,
    j_sex,
    j_pre_add,
    j_pre_city,
    j_pre_post_code,
    j_per_country,
    j_per_tel,
    j_division,
    j_email,
    j_occupation,
    j_etin,
    j_nationality,
    j_passport_num,
    introducer_id,
    bo_id,
    nom_id,
    poa_id,
    internet_trading,
    dse,
    cse,
    oms,
    sms_service,
    email_service,
  } = req.body;
  // console.log({ 'hi' });
  const sql = "INSERT INTO joint_acc (c_name,c_father_name,c_mother_name,c_account_type,c_opening_date,c_dob,c_sex,c_pre_add,c_pre_city,c_pre_post_code,c_pre_country,c_pre_tel,c_per_add,c_per_city,c_per_post_code,c_per_country,c_per_tel,c_type,c_division,c_mobile_num,c_email,c_occupation,c_etin,c_nationality,c_branch,c_bank_routing_num,c_bank_account_num,c_bank_branch_name,c_passport_num,c_operation_type,j_name,j_fatther_name,j_mother_name,j_dob,j_sex,j_pre_add,j_pre_city,j_pre_post_code,j_per_country,j_per_tel,j_division,j_email,j_occupation,j_etin,j_nationality,j_passport_num,introducer_id,bo_id,nom_id,poa_id,internet_trading,dse,cse,oms,sms_service,email_service) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  db.query(sql, [c_name, c_father_name, c_mother_name, c_account_type, c_opening_date, c_dob, c_sex, c_pre_add, c_pre_city, c_pre_post_code, c_pre_country, c_pre_tel, c_per_add, c_per_city, c_per_post_code, c_per_country, c_per_tel, c_type, c_division, c_mobile_num, c_email, c_occupation, c_etin, c_nationality, c_branch, c_bank_routing_num, c_bank_account_num, c_bank_branch_name, c_passport_num, c_operation_type, j_name, j_fatther_name, j_mother_name, j_dob, j_sex, j_pre_add, j_pre_city, j_pre_post_code, j_per_country, j_per_tel, j_division, j_email, j_occupation, j_etin, j_nationality, j_passport_num, introducer_id, bo_id, nom_id, poa_id, internet_trading, dse, cse, oms, sms_service, email_service], (err, result) => {
      if(err) throw err;
      res.json({ message: "joint customer added." });
  });
});

router.post("/company", (req, res) => {
  const {
    c_name,c_father_name,c_mother_name,c_account_type,c_opening_date,c_dob,c_sex,c_pre_add,c_pre_city,c_pre_post_code,c_pre_country,c_pre_tel,c_per_add,c_per_city,c_per_post_code,c_per_country,c_per_tel,c_type,c_division,c_mobile_num,c_email,c_occupation,c_etin,c_nationality,c_branch,c_bank_routing_num,c_bank_account_num,c_bank_branch_name,c_passport_num,c_operation_type,com_name,trade_license_num,contactperson_name,contactperson_mobile_num,introducer_id,bo_id,au_nid,internet_trading,dse,cse,oms,sms_service,email_service
  } = req.body;
  // console.log({
  //   introducer_id,
  //   crm_name,
  //   crm_dob,
  //   crm_nid,
  //   crm_address,
  //   crm_email,
  //   crm_mobile_num,
  // });
  const sql = "INSERT INTO company_acc (c_name,c_father_name,c_mother_name,c_account_type,c_opening_date,c_dob,c_sex,c_pre_add,c_pre_city,c_pre_post_code,c_pre_country,c_pre_tel,c_per_add,c_per_city,c_per_post_code,c_per_country,c_per_tel,c_type,c_division,c_mobile_num,c_email,c_occupation,c_etin,c_nationality,c_branch,c_bank_routing_num,c_bank_account_num,c_bank_branch_name,c_passport_num,c_operation_type,com_name,trade_license_num,contactperson_name,contactperson_mobile_num,introducer_id,bo_id,au_nid,internet_trading,dse,cse,oms,sms_service,email_service) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  db.query(sql, [c_name, c_father_name, c_mother_name, c_account_type, c_opening_date, c_dob, c_sex, c_pre_add, c_pre_city, c_pre_post_code, c_pre_country, c_pre_tel, c_per_add, c_per_city, c_per_post_code, c_per_country, c_per_tel, c_type, c_division, c_mobile_num, c_email, c_occupation, c_etin, c_nationality, c_branch, c_bank_routing_num, c_bank_account_num, c_bank_branch_name, c_passport_num, c_operation_type, com_name, trade_license_num, contactperson_name, contactperson_mobile_num, introducer_id, bo_id, au_nid, internet_trading, dse, cse, oms, sms_service, email_service], (err, result) => {
      if(err) throw err;
      res.json({ message: "joint customer added." });
  });
});

function customerDataWriter({
  c_name,
  c_father_name,
  c_mother_name,
  c_account_type,
  c_opening_date,
  c_dob,
  c_sex,
  c_pre_add,
  c_pre_city,
  c_pre_post_code,
  c_pre_country,
  c_pre_tel,
  c_per_add,
  c_per_city,
  c_per_post_code,
  c_per_country,
  c_per_tel,
  c_type,
  c_division,
  c_mobile_num,
  c_email,
  c_occupation,
  c_etin,
  c_nationality,
  c_branch,
  c_bank_routing_num,
  c_bank_account_num,
  c_bank_branch_name,
  c_passport_num,
  c_operation_type,
  internet_trading,
  dse,
  cse,
  oms,
  sms_service,
  email_service,
}) {
  const sql =
    "INSERT INTO customer (c_name,c_father_name,c_mother_name,c_account_type,c_opening_date,c_dob,c_sex,c_pre_add, c_pre_city, c_pre_post_code,c_pre_country,c_pre_tel,c_per_add,c_per_city,c_per_post_code,c_per_country,c_per_tel,c_type,c_division,c_mobile_num,c_email,c_occupation,c_etin,c_nationality,c_branch,c_bank_routing_num,c_bank_account_num,c_bank_branch_name,c_passport_num,c_operation_type,internet_trading,dse,cse,oms,sms_service,email_service) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [
      c_name,
      c_father_name,
      c_mother_name,
      c_account_type,
      c_opening_date,
      c_dob,
      c_sex,
      c_pre_add,
      c_pre_city,
      c_pre_post_code,
      c_pre_country,
      c_pre_tel,
      c_per_add,
      c_per_city,
      c_per_post_code,
      c_per_country,
      c_per_tel,
      c_type,
      c_division,
      c_mobile_num,
      c_email,
      c_occupation,
      c_etin,
      c_nationality,
      c_branch,
      c_bank_routing_num,
      c_bank_account_num,
      c_bank_branch_name,
      c_passport_num,
      c_operation_type,
      internet_trading,
      dse,
      cse,
      oms,
      sms_service,
      email_service,
    ],
    (err, results) => {
      if (err) throw err;
      res.json({ message: "customer added." });
    }
  );
}

router.post("/crm", (req, res) => {
  const {
    introducer_id,crm_name,crm_dob,crm_nid,crm_address,crm_email,crm_mobile_num,
  } = req.body;

  const sql = "INSERT INTO crm (introducer_id,crm_name,crm_dob,crm_nid,crm_address,crm_email,crm_mobile_num) values (?,?,?,?,?,?,?)";

  db.query(sql, [introducer_id,crm_name,crm_dob,crm_nid,crm_address,crm_email,crm_mobile_num], (err, result) => {
      if(err) throw err;
      res.json({ message: "New crm added." });
  });
});

router.put("/:nid", (req, res) => {
  const { BOID } = req.body;
  const nid = req.params.nid;
  console.log({ nid, BOID });
  const sql = "UPDATE employee SET BOID = ? WHERE nid = ?";
  db.query(sql, [BOID, nid], (err, results) => {
    if (err) throw err;
    res.json({ message: "employee added." });
  });
});

module.exports = router;

