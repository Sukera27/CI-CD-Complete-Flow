from fastapi import APIRouter
from dotenv import load_dotenv

import requests, json, os

from dto.SimpsonsDTO import SimpsonsDTO

router = APIRouter(
    prefix="/api/python/v1/simpson",
    tags=["simpsons"],
    responses={404: {"message": "Not found"}}
)

load_dotenv()

@router.get("/{numero:int}")
async def simpsonsNumber(numero: int):
    req = requests.get(os.getenv('SIMPSONS_API')+str(numero))
    simpsonsJson = json.loads(req.content)
    
    imgUrl = f"https://cdn.thesimpsonsapi.com/500{simpsonsJson['portrait_path']}"
    simpsons = SimpsonsDTO(name=simpsonsJson["name"],picUrl=imgUrl)
    resp = requests.post(os.getenv('AUDIT_API') + os.getenv('AUDIT_API.SAVE_ENDPOINT'), json=dict(simpsons))
    return simpsons