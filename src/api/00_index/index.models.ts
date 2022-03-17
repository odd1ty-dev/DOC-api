import { IAdmin, ModelAdmin, Admin } from "../../models/admin.model";
import { IAllergy, ModelAllergy } from "../..//models/allergy.model";
import { IAppointment, ModelAppointment } from "../..//models/appointment.model";
import {
    IAppointmentMedicine,
    ModelAppointmentMedicine,
} from "../../models/appointmentmedicine.model";
import { IDoctor, ModelDoctor } from "../../models/doctor.model";
import { IMedicine, ModelMedicine } from "../../models/medicine.mode";
import { IPatient, ModelPatient } from "../../models/patient.model";
import {
    IPatientAllergy,
    ModelPatientAllergy,
} from "../../models/patientallergy.model";
import { ISpecialty, ModelSpecialty } from "../../models/specialty.model";
import { db, RawQuery } from "../../config/db.config";

export {
    IAdmin,
    ModelAdmin,
    Admin,
    IAllergy,
    ModelAllergy,
    IAppointment,
    ModelAppointment,
    IAppointmentMedicine,
    ModelAppointmentMedicine,
    IDoctor,
    ModelDoctor,
    IMedicine,
    ModelMedicine,
    IPatient,
    ModelPatient,
    IPatientAllergy,
    ModelPatientAllergy,
    ISpecialty,
    ModelSpecialty,
    db,
    RawQuery,
};
