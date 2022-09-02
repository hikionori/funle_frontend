from pydantic import BaseModel, Field, EmailStr, validator
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError('Invalid ObjectId')
        return ObjectId(v)
    
    @classmethod
    def __modify_shema__(cls, field_schema):
        field_schema.update(type='string')

class UserModel(BaseModel):
    pass

class TaskModel(BaseModel):
    pass

class TutorialModel(BaseModel):
    pass