import { IAdmin, ModelAdmin, Admin } from "src/models/admin.model";
import { IAllergy, ModelAllergy } from "src/models/allergy.model";
import { IAppointment, ModelAppointment } from "src/models/appointment.model";
import {
    IAppointmentMedicine,
    ModelAppointmentMedicine,
} from "src/models/appointmentmedicine.model";
import { IDoctor, ModelDoctor } from "src/models/doctor.model";
import { IMedicine, ModelMedicine } from "src/models/medicine.mode";
import { IPatient, ModelPatient } from "src/models/patient.model";
import {
    IPatientAllergy,
    ModelPatientAllergy,
} from "src/models/patientallergy.model";
import { ISpecialty, ModelSpecialty } from "src/models/specialty.model";
import { db, RawQuery } from "src/config/db.config";

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
