from pydantic import BaseModel

class SimpsonsDTO(BaseModel):
    name: str
    picUrl: str