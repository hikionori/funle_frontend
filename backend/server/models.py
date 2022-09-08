from typing import Optional

from pydantic import BaseModel, EmailStr, Field

class UserBase(BaseModel):
    email: Optional[EmailStr] = Field(None, example="test@gmail.com")
    name: str = Field(..., example="John Doe")

    class Config:
        schema_extra = {
            "example": {
                "email": "test@gmail.com",
                "name": "John Doe",
            }
        }

